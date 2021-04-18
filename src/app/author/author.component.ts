import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../authors/author.model';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: AuthorModel[];
  public id: string;

  constructor(private authorService: AuthorsService, private route: ActivatedRoute, private router: Router,
   public auth: AuthService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.authorService.singleAuthor(this.id).subscribe((data)=>{
      this.author = JSON.parse(JSON.stringify(data));
    })
  }

  delete(){
    this.authorService.deleteAuthor(this.id);
    this.router.navigate(['/home']);
  }
}
