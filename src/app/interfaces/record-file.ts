export class RecordFile {
    id:string ='';
    name:string = '';
    size:number = 0;
    prediction:string = "";
    url:string = '';
    file:File;
    scannedAt:string =''

    
    constructor(file:File){
        this.file=file;
    }
}
