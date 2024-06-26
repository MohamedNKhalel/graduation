import { RecordFile } from './../../interfaces/record-file';
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiseaseService } from 'src/app/disease.service';
import { DataService } from 'src/app/services/data.service';
import { Patient } from 'src/app/interfaces/patient';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { RecordsService } from 'src/app/services/records.service';
import { GeminiService } from 'src/app/services/gemini.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgxDropzoneModule,ReactiveFormsModule,MatSelectModule,MatFormFieldModule,MatInputModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[DatePipe]
})
export class HomeComponent implements OnInit{
  constructor(private _DatePipe:DatePipe,private _RecordsService:RecordsService,private _AngularFireStorage:AngularFireStorage,private _DiseaseService:DiseaseService,private _DataService:DataService,private _GeminiService:GeminiService){}
  loadingFlag:boolean = false;
  
  files: File[] = [];
  selectedFiles!:FileList;
  currentSelectedFile!:RecordFile;
  percentage:Number =0;

  formattedTimestamp: any ='';

  prediction!:string 
  patients:Patient[]=[];

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
      this.currentSelectedFile.image = downloadLink;
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
}
