import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../server/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // @Input()
  bookList: Book[] = [];
  // isShowEditForm = false;
  // index = -1;
  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookList = this.bookService.getAll();
  }

  // tslint:disable-next-line:typedef
  // addNewBook(book: Book) {
  //   this.bookList.push(book);
  // }

  // showEditForm(i: number) {
  //   this.isShowEditForm = !this.isShowEditForm;
  //   this.index = i;
  // }

  // tslint:disable-next-line:typedef
  // editBook(book: Book) {
  //   this.bookList[this.index] = book;
  // }
}
