import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  searchKeyword = '';
  searchResults: any[] = [];
  searchSubscription: Subscription | undefined;

  constructor(private bookService: BookService) { }

  searchBooks(): void {
    if (this.searchKeyword.trim() !== '') {
      this.searchSubscription = this.bookService.searchBooks(this.searchKeyword.trim()).subscribe({
        next: (data) => {
          this.searchResults = data.books;
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
