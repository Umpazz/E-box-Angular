import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoment/home/home.component';
import { DescriptionComponent } from './compoment/description/description.component';
import { CategoryComponent } from './compoment/category/category.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "category", component: CategoryComponent },
  { path: "categories/:categoryName", component: DescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
