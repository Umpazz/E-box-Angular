import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Category[] = [];
  s?:Category;

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.service.getAllCategory().subscribe(
      (d: any) => {
        this.category = d
        
      }
    )
  }

}
