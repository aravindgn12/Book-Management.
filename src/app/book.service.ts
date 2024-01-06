import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'http://localhost:8085/api/bookmaster'; 

  constructor(private http: HttpClient) {}
  saveBookInformation(bookData: any): Observable<any> {
    const saveUrl = `${this.apiUrl}/save`;
    return this.http.post<any>(saveUrl, bookData);
  }

  searchBooks(searchKeyword: string): Observable<any> {
    const searchUrl = `${this.apiUrl}/search?search_keyword=${searchKeyword}`;
    return this.http.get<any>(searchUrl);
  }
}
