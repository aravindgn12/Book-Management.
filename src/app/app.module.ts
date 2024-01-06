import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { BookInformationComponent } from './book-information/book-information.component';
import { SearchFormComponent } from './search-form/search-form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BookInformationComponent,
    SearchFormComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule  
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
