import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/service/categories.service';
import { Categories } from '../shared/models/Categories';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  name = '';
  result: any;
  c: any;
  books: any;
  constructor(public route: ActivatedRoute, public service: CategoriesService) { }


  ngOnInit(): void {

    this.route.params.subscribe((d) => {
      this.name = d['categoryName'];
    })

    this.service.getCategories().subscribe(
      (d) => {
        this.c = d;
        this.result = this.c.find((data: any) => data.name == this.name)
        this.books = this.result.books;
      }
    )
  }

}

// To add getBooks() method in categories.service.ts, you can use the following code:
//
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CategoriesService {
//   private apiUrl = 'your-api-url-here';
//
//   constructor(private http: HttpClient) { }
//
//   getCategories(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/categories`);
//   }
//
//   getBooks(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/books`);
//   }
// }