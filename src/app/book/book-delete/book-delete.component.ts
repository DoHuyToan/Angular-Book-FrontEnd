import { Component, OnInit } from '@angular/core';
import {BookService} from '../../server/book.service';
import {Book} from '../../model/book';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book = {};
  id: number | undefined;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.bookService.getById(this.id).subscribe(book => {
        this.book = book;
      });

    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  delete(){
    this.bookService.delete(this.id).subscribe(() => {
      this.router.navigateByUrl('/books');
    });

  }

}
