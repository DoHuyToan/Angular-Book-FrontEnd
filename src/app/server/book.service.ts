import { Injectable } from '@angular/core';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList: Book[] = [
    {
      id: 1,
      title: 'Thep da toi the day',
      author: 'Lep Yasin',
      description: 'Tao dong luc'
    }
  ];
  constructor() { }
  getAll(){
    return this.bookList;
  }
  getById(index: number){
    return this.bookList[index];
  }

  create(book: Book | undefined){
    if (book) {
      this.bookList.push(book);
    }
  }

  edit(index: number | undefined, book: Book){
    // @ts-ignore
    this.bookList[index] = book;
  }

  delete(index: number | undefined){
    if (typeof index === 'number') {
      this.bookList.splice(index, 1);
    }
  }
}
