import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { QuestionListComponent } from './question-list/question-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router' ;
import { MatTabsModule } from '@angular/material/tabs';

const appRoutes: Routes = [
 {
    path:'users', 
    component:UserListComponent
  },
  {
    path:'questions',
    component:QuestionListComponent
  },
  {
    path:'**',
    redirectTo: '/users',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent, 
    QuestionListComponent,
    UserListComponent	  
    
  ],

  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
