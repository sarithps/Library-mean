import { Component, OnInit } from '@angular/core';
import { AuthorModel } from './author.model';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: AuthorModel[];

  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors = JSON.parse(JSON.stringify(data));
    })
  }

}
