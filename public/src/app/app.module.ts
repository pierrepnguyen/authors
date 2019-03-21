import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ViewAuthorComponent } from './view-author/view-author.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    ViewAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
