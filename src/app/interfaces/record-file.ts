export class RecordFile {
    id:string ='';
    name:string = '';
    size:number = 0;
    prediction:string = "";
    image:string = '';
    file:File;
    timestamp:any =''

    
    constructor(file:File){
        this.file=file;
    }
}
