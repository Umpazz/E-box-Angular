import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }
  getAllCategory() {
    return this.http.get("assets/mock_data.json")
  }
}
