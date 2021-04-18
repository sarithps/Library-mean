import { Component, OnInit } from '@angular/core';
import { BookModel } from '../books/book.model';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: BookModel[];
  public id: string;

  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router,
     public auth: AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookService.singleBook(this.id).subscribe((data)=>{
      this.book = JSON.parse(JSON.stringify(data));
    })
  }

  delete(){
    this.bookService.deleteBook(this.id);
    this.router.navigate(['/home']);
  }

}
