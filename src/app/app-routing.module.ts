import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';

const routes: Routes = [
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/edit/:id',
    component: BookEditComponent
  },
  {
    path: 'books/delete/: id',
    component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
