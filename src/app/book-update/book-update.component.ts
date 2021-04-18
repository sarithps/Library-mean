import { Component, OnInit } from '@angular/core';
import { BookModel } from '../books/book.model';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  book: BookModel[];
  public id: string;
  bookItem = new BookModel(null,null,null,null);

  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  update(){
    this.bookService.updateBook(this.id,this.bookItem);
    this.router.navigate(['/home']);
  }

}
