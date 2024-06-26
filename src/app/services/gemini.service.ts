import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
  private apiKey  = "AIzaSyC_L958W5m-lKzjmHsBiUsg8vg0UuW78Ic";

  private headers = new HttpHeaders().set('Content-Type', 'application/json').set('x-goog-api-key', this.apiKey);
  private context: any[] = []; // Array to keep the conversation context

  generateContent(prompt: string): Observable<any> {
    const body = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }]
    };

    return this.http.post<any>(this.apiUrl, body, { headers:this.headers });
  }
  

}
