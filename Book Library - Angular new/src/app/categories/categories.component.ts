import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/service/categories.service';
import { Categories } from '../shared/models/Categories';
import { Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private route :Router,private service: CategoriesService) {
    
  }

  category: Categories[] = [];
  s?: Categories;
  
  ngOnInit() {
    this.service.getCategories().subscribe((data:any)=>{
      this.category = data;
    })
  }
  // fill your code here
}
