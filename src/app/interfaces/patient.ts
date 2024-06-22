import { RecordFile } from "./record-file";

export interface Patient {
    id:string;
    name:string,
    gender:string,
    birthDate:string,
    phone:string,
    email:string,
    medicalRecords:RecordFile,
    rate:{
        bloodPressureRate:number,
        bloodSugarRate:number,
        temperature:number
    }
}
