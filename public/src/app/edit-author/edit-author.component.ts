
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  id = "";

  anAuthor: any = {
    name: "",
    birthday: Date
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _HttpService: HttpService
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(params['id']);
      this.getAuthor(this.id);
    });
  }
  
  getAuthor(id: String){
    this._HttpService.getOne(this.id)
      .subscribe(data => {
        this.anAuthor = data;
        console.log("Got author:", data);
      });
  }

  editAuthor(id:String){
    this._HttpService.editAuthor(id, this.anAuthor)
      .subscribe(data => {
        console.log(this.anAuthor);
        this.goHome();
      });
  }

  goHome() {
    this._router.navigate(['/']);
  }

  delete(id: String){
    this._HttpService.deleteAuthor(id)
      .subscribe(data => {
        console.log("Deleted Author: ", data);
        this.goHome();
      });
  }
}