import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BooksService, private router: Router) { }
  bookItem = new BookModel(null,null,null,null);
  ngOnInit(): void {
  }

  addBook(){
    this.bookService.newBook(this.bookItem);
    this.router.navigate(['/home']);
  }
}
