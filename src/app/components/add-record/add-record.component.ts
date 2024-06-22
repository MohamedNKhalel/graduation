import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordFile } from 'src/app/interfaces/record-file';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiseaseService } from 'src/app/disease.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { RecordsService } from 'src/app/services/records.service';
import { DataService } from 'src/app/services/data.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-record',
  standalone: true,
  imports: [CommonModule,SharedModule,NgxDropzoneModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {
  constructor(private _DiseaseService:DiseaseService, private _AngularFireStorage:AngularFireStorage, private _RecordsService:RecordsService ,private _DataService:DataService,public _MatDialogRef: MatDialogRef<AddRecordComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private _ToastrService:ToastrService){}

  selectedFiles!:FileList;
  currentSelectedFile!:RecordFile;
  files: File[] = [];
  percentage:Number =0;
  prediction!:string 
  loadingFlag:boolean = false;



  sendImageForm:FormGroup = new FormGroup({
    fileup:new FormControl(null,[Validators.required]),
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


  sendImage(){
    console.log(this.data);
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
  
  
        this._RecordsService.saveFileMetaData(this.currentSelectedFile,this.data)
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
        this._DataService.updateDiseaseProperty().doc(this.data).update({
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
    setTimeout(() => {
      this._MatDialogRef.close(true);
      this._ToastrService.success("Record added successfully")
    }, 2000);
  }
  

}
