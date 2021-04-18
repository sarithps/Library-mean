import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(private authorService: AuthorsService, private router: Router) { }
  authorItem = new AuthorModel(null,null,null,null);
  ngOnInit(): void {
  }

  addAuthor(){
    this.authorService.newAuthor(this.authorItem);
    this.router.navigate(['/home']);
  }
}
