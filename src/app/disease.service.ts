import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(private _HttpClient:HttpClient) { }
  // private apiUrl:string = `https://your-backend-api-url.com/skin-disease`;
  private mongoUrl = 'mongodb+srv://admin:admin1234@together.cvq6ffb.mongodb.net/skin?retryWrites=true&w=majority';

  diseaseApi(data:any):Observable<any>
  {
    return this._HttpClient.post(`http://127.0.0.1:5000/DermaApp`,data)
  }
  // async getSkinDiseaseData(prediction: string): Promise<SkinDiseaseData | null> {
  //   const client = new MongoClient(this.mongoUrl);
  //   await client.connect();
  //   const database = client.db('skin');
  //   const collection = database.collection('derma_center');

  //   const diseaseData = await collection.findOne({ disease_name: prediction });
  //   await client.close();

  //   if (diseaseData) {
  //     return {
  //       imageUrl: diseaseData['image_url'],
  //       diseaseName: diseaseData['disease_name'],
  //       description: diseaseData['description'],
  //       symptoms: (diseaseData['symptoms'] as string).split(',').map(s => s.trim()),
  //       treatment: diseaseData['treatment']
  //     };
  //   } else {
  //     return null;
  //   }
  // }
}
