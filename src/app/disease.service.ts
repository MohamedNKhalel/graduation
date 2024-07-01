import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(private _HttpClient:HttpClient) { }
  diseaseApi(data:any):Observable<any>
  {
    return this._HttpClient.post(`http://127.0.0.1:5000/DermaApp`,data)
  }
}
