import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.css']
})
export class BookInformationComponent {
  authorName: string = '';
  bookName: string = '';
  publisherName: string = '';
  publishDate: string = '';
  subjectCategory: string = '';
  subjectSubCategory: string = '';
  bindingType: string = '';

constructor(private http: HttpClient) {}
clearFields(): void {
  this.authorName = '';
  this.bookName = '';
  this.publisherName = '';
  this.publishDate = '';
  this.subjectCategory = '';
  this.subjectSubCategory = '';
  this.bindingType = ''; 
}

  saveBook() {
    const bookData = {
      "author_name": this.authorName,
      "book_name": this.bookName,
      "publisher_name": this.publisherName,
      "publish_date": this.publishDate,
      "subject_category": this.subjectCategory,
      "subject_subcategory": this.subjectSubCategory,
      "binding_type": this.bindingType
    };
    console.log("Book Data",bookData);

    this.http.post("http://localhost:8085/api/bookmaster/save",bookData).subscribe((bookData: any)=>
    {
        console.log(bookData);

        alert("Employee Registered Successfully")
       

    });
  
  }
  
  
}
