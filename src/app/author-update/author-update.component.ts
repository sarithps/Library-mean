import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../authors/author.model';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.css']
})
export class AuthorUpdateComponent implements OnInit {
  author: AuthorModel[];
  public id: string;
  authorItem = new AuthorModel(null,null,null,null);

  constructor(private authorService: AuthorsService ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  update(){
    this.authorService.updateAuthor(this.id,this.authorItem);
    this.router.navigate(['/home']);
  }
}
