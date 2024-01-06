import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInformationComponent } from './book-information/book-information.component';
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
  { path: 'book-information', component: BookInformationComponent },
  { path: 'search', component: SearchFormComponent },
  { path: '', redirectTo: '/book-information', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
