import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(private _HttpClient:HttpClient) { }
  private modelApiUrl = 'http://192.168.1.5:5000';
  private treatmentApiUrl = 'http://localhost:3000/api/disease'; // API endpoint for disease data

  // private mongoUrl = 'mongodb+srv://admin:admin1234@together.cvq6ffb.mongodb.net/skin?retryWrites=true&w=majority';

  diseaseApi(data:any):Observable<any>
  {
    return this._HttpClient.post(`${this.modelApiUrl}/DermaApp`,data)
  }
  getDiseaseData(diseaseName: string): Observable<any> {
    return this._HttpClient.get<any>(`${this.treatmentApiUrl}/${diseaseName}`);
  }
}
