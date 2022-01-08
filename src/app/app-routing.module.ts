import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';
// @ts-ignore
import * as module from 'module';

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: 'books',
    // tslint:disable-next-line:no-shadowed-variable
    loadChildren: () => import('./book/book.module').then(module => module.BookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
