import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './comments/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';

const routes: Routes=[
  {path: 'books', component: BookListComponent},
  {path: 'category/:id', component: BookListComponent},
  {path: '', redirectTo:'/', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
