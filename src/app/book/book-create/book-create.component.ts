import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../server/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  // book: Book = {};
  // @Output()
  // eventEmitter: EventEmitter<Book> = new EventEmitter<Book>();
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  submit(bookForm: { value: Book | undefined; resetForm: () => void; }){
    // this.eventEmitter.emit(bookForm.value);
    this.bookService.create(bookForm.value).subscribe(() => {
      bookForm.resetForm();
      this.router.navigateByUrl('/books');
    }, error => {
      alert('Error');
    });
  }
}
