import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Cosmos } from '../models/Cosmos';
import { COSMOS } from '../models/cosmos-mock-data';

@Injectable({
  providedIn: 'root'
})
export class CosmosService {
  //Fill your code here
  getPlanets(): Observable<any>
  //Cosmos[] 
  {
    return of(COSMOS);
  }
}
