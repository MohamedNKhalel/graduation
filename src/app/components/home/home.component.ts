import { RecordFile } from './../../interfaces/record-file';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiseaseService } from 'src/app/disease.service';
import { DataService } from 'src/app/services/data.service';
import { Patient } from 'src/app/interfaces/patient';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GeminiService } from 'src/app/services/gemini.service.spec';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgxDropzoneModule,ReactiveFormsModule,MatSelectModule,MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers:[DiseaseService]
})
export class HomeComponent implements OnInit{
  constructor(private _RecordsService:RecordsService,private _AngularFireStorage:AngularFireStorage,private _DiseaseService:DiseaseService,private _DataService:DataService,private _GeminiService:GeminiService){}
  loadingFlag:boolean = false;
  
  files: File[] = [];
  selectedFiles!:FileList;
  currentSelectedFile!:RecordFile;
  percentage:Number =0;


  prediction!:string 
  patients:Patient[]=[];
  
  prompt:string = '';
  loading:boolean = false;
  allGeneratedText:string []=[]
  generatedText:string='';
  chat:boolean=false;
  ngOnInit(): void {
      this.getPatients();
      
  }
  
  sendImageForm:FormGroup = new FormGroup({
    fileup:new FormControl(null,[Validators.required]),
    id:new FormControl(null,[Validators.required])
  })

onSelect(event:any) {
  console.log(event);
  this.selectedFiles =event.addedFiles;
  console.log(this.selectedFiles);
  
  this.files.push(event.addedFiles[0]);
  this.sendImageForm.get('fileup')?.setValue(this.files);
}




onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

getPatients(){
  this._DataService.getAllPatients().subscribe({
    next:data=>{
      this.patients = data.map((e:any)=>{
        const info = e.payload.doc.data();
        info.id = e.payload.doc.id;
        return info;
      })
      console.log(this.patients);
      
    },
    error:err=>{
      console.log(err);
      
    }
  })
}


sendImage(){
  console.log(this.sendImageForm.get('id')?.value); //after clicking on send the id of the select passes to the form

  this.loadingFlag = true;
  let formData = new FormData;
  formData.append('fileup',this.selectedFiles[0]);

  this.currentSelectedFile = new RecordFile(this.selectedFiles[0])
  const path =  'Uploads/' + this.currentSelectedFile.file.name;
  const storageRef = this._AngularFireStorage.ref(path);
  const record = storageRef.put(this.selectedFiles[0]);

  record.snapshotChanges().pipe(finalize(()=>{
    storageRef.getDownloadURL().subscribe(downloadLink=>{
      this.currentSelectedFile.url = downloadLink;
      this.currentSelectedFile.name = this.currentSelectedFile.file.name;
      this.currentSelectedFile.size = this.currentSelectedFile.file.size;
      this.currentSelectedFile.prediction = this.prediction;


      this._RecordsService.saveFileMetaData(this.currentSelectedFile,this.sendImageForm.get('id')?.value)
    })
  })).subscribe({
    next:(data:any)=>{
      console.log(data);
      
      this.percentage = (data.bytesTransferred * 100 / data.totalBytes);
    },
    error:err=>{
      console.log(err);
      
    }
  })

  this._DiseaseService.diseaseApi(formData).subscribe({
    next:data=>{
      console.log(data);
      this.prediction = data.prediction;
      this._DataService.diseaseName.next(this.prediction)
      console.log(this.prediction);
      this.loadingFlag = false
      this._DataService.updateDiseaseProperty().doc(this.sendImageForm.get('id')?.value).update({
        disease: this.prediction
      }).then(() => {
        console.log('Property updated successfully');
      }).catch(error => {
        console.error('Error updating property: ', error);
      })
    },
    error:err=>{
      console.log(err);
      this.loadingFlag = false
      this.prediction = "Diagnoses Not Avaliable" 
    }
  })
}
generateContent() {
  this.loading = true;
  this._GeminiService.generateContent(this.prompt).subscribe({
    next: (response) => {
      this.loading =false;
      const text = response.candidates[0].content.parts[0].text; 
      this.generatedText = this.styleContent(text)
      this.allGeneratedText.push(this.generatedText)
      console.log(this.allGeneratedText);
      // console.log(typeof(this.generatedText));

      this.prompt= ''
    },
    error: (error) => {
      this.loading =false;
      console.error('Error generating content:', error);
    }
  });
}
styleContent(content: string): string {
  content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold text
  content = content.replace(/(?:^|\n)\*\s/g, '<li>').replace(/\n\s*\*\s/g, '</li><li>'); // List items
  content = content.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>'); // Wrap list items in <ul>
  content = content.replace(/<\/li>\n/g, '</li>'); // Close list items
  content = content.replace(/(?:^|\n)(\*\*.*?\*\*)/g, '<h2>$1</h2>'); // Headings
  content = content.replace(/\n/g, '<p>'); // Paragraphs
  content = content.replace(/<p><\/li>/g, '</li>'); // Fix list item closing tags
  content = content.replace(/<\/ul><p>/g, '</ul>'); // Remove paragraph tags immediately after lists
  return content;
}
toggleChat(){
  this.chat = !this.chat;
}
}
