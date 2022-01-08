import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  // bookList: Book[] = [
  //   {
  //     id: 1,
  //     title: 'Thep da toi the day',
  //     author: 'Lep Yasin',
  //     description: 'Tao dong luc'
  //   }
  // ];
  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:3000/books');
  }
  getById(id: number): Observable<Book>{
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  // @ts-ignore
  create(book: Book | undefined): Observable<Book>{
    if (book) {
      // @ts-ignore
      return this.http.post<Book>('http://localhost:3000/books', book);
    }
  }

  edit(id: number | undefined, book: Book): Observable<Book>{
    return this.http.put<Book>(`http://localhost:3000/books/${id}`, book);
  }

  // @ts-ignore
  delete(id: number | undefined): Observable<Book>{
    if (typeof id === 'number') {
      return this.http.delete(`http://localhost:3000/books/${id}`);
    }
  }
}
