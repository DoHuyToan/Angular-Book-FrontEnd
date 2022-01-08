import { Component } from '@angular/core';
import {Book} from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Book-FrontEnd';
  bookList: Book[] = [
    {
      id: 1,
      title: 'Thep da toi the day',
      author: 'Asavin',
      description: 'Tao dong luc'
    },
    {
      id: 2,
      title: 'Nghi giau lam giau',
      author: 'Alex',
      description: 'Dinh huong phat trien'
    }
  ];
}
