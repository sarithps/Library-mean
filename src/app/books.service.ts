import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get('https://meanlibrarybysarith.herokuapp.com/books');
  }

  singleBook(id){
    return this.http.get('https://meanlibrarybysarith.herokuapp.com/books/single', {
      params:{ i: id }
    });
  }

  deleteBook(id:any){
    return this.http.delete('https://meanlibrarybysarith.herokuapp.com/books/remove/'+id)
    .subscribe(data=>{console.log(data)})
  }

  newBook(item){
    return this.http.post('https://meanlibrarybysarith.herokuapp.com/addbook', {'book':item})
    .subscribe(data =>{console.log(data)})
  }

  updateBook(id:any,item){
    return this.http.post('https://meanlibrarybysarith.herokuapp.com/books/update/'+id,{'book':item})
    .subscribe(data=>{console.log(data)})
  }
}
