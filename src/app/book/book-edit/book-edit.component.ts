import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../../model/book';
import {BookService} from '../../server/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  editBookForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  });
  // @Output()
  // eventEmitter: EventEmitter<Book> = new EventEmitter<Book>();
  // @Input()
  book: Book = {};
  id: number | undefined;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.bookService.getById(this.id).subscribe(book => {
        this.book = book;
        this.editBookForm = new FormGroup({
          id: new FormControl(this.book.id),
          title: new FormControl(this.book.title),
          author: new FormControl(this.book.author),
          description: new FormControl(this.book.description)
        });
      });

    });
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  editBook() {
    // this.eventEmitter.emit(this.editBookForm.value);
    this.bookService.edit(this.id, this.editBookForm.value).subscribe();
    // this.editBookForm.reset();
  }
}
