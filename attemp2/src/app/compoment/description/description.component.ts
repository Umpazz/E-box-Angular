import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  name = '';
  result: any;
  c: any;
  books: any
  constructor(public route: ActivatedRoute, public service: ServiceService) { }


  ngOnInit(): void {
    this.route.params.subscribe((d) => {
      this.name = d['categoryName'];
    })

    this.service.getAllCategory().subscribe(
      (d) => {
        this.c = d;
        this.result = this.c.find((data: any) => data.name == this.name)
        this.books = this.result.books;
      }
    )
  }



}
