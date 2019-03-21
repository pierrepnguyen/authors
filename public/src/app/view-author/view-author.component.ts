
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.css']
})
export class ViewAuthorComponent implements OnInit {

  id: "";

  anAuthor: any = {
    name: "",
    birthday: "",
    books: [],
  }

  book: any = {
    title: "",
  }

  a_vote: any = {
    index: -1,
    votes: 0,
  }

  dBook: any = {
    index: -1,
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
      this.getAuthor();
    });
  }

  getAuthor(){
    this._HttpService.getOne(this.id)
      .subscribe(data => {
        this.anAuthor = data;
        console.log("Got author:", this.anAuthor);
      });
  }

  addBook() {
    this._HttpService.addBook(this.id, this.book)
      .subscribe(data => {
        this.book = data;
        console.log("New book:", this.book);
        this.getAuthor();
      })
      this.book = {title: ""}
  }

  vote(title, vote, idx) {
    this.a_vote = {
      title: title,
      votes: vote,
      index: idx,
    }
    this._HttpService.voteOnBook(this.id, this.a_vote)
      .subscribe(data => {
        console.log(this.a_vote);
        this.getAuthor();
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

  deleteABookFS(idx){
    this.dBook = {
      index: idx
    }
    this._HttpService.deleteBook(this.id, this.dBook)
      .subscribe(data => {
        data = idx;
        console.log("data", data);
        console.log("idx",idx)
        this.getAuthor();
      });
  }

}