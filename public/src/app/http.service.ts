import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAll(){
    return this._http.get('/authors');
  }
  getOne(id: any){
    return this._http.get(`authors/${id}`);
  }
  createAuthor(newAuthor){
    return this._http.post('/authors', newAuthor);
  }
  editAuthor(id:any, author){
    return this._http.put(`/authors/${id}`, author);
  }
  addBook(id:any, book){
    return this._http.put(`/book/${id}`, book);
  }
  voteOnBook(id:any, book){
    return this._http.put(`/book/${id}`, book);
  }
  deleteAuthor(id:any){
    return this._http.delete(`/authors/${id}`);
  }
  deleteBook(id:any, index){
    return this._http.put(`/books/${id}`, index);
  }
}
