import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslatorLenguajesService {

  private apiUrl = environment.apiUrl2; 

  constructor(private http: HttpClient) { }


  getLanguages(): Observable<Map<string, string>> {
    return this.http.get<Record<string, string>>(`${this.apiUrl}/lenguajes`).pipe(
      map(languages => new Map(Object.entries(languages))) 
    );
  }
}
