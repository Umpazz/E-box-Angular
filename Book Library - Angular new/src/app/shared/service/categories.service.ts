import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  // Fill your code here 
  url = '../assets/mock-data.json';

  getCategories():Observable<any>{
    return this.http.get(this.url);
  }
}
