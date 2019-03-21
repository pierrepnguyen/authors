import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { ViewAuthorComponent } from './view-author/view-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "add", component: AddAuthorComponent},
  {path: "view/:id", component: ViewAuthorComponent},
  {path: "edit/:id", component: EditAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
