import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MOVIES } from '../models/movies';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title: string = 'Trending Movies';
  movies = MOVIES;
  searchText: string = '';
  constructor() { }

  ngOnInit(): void {  
  }

  search() {
    if (this.searchText === '' || !this.searchText)
    this.movies = MOVIES;
  else {
    this.movies = MOVIES;
    this.movies = this.movies.filter(movie => movie.movieTitle?.startsWith(this.searchText.toLowerCase()));
  }

  }
  reset() {
    this.searchText = '';
    this.movies = MOVIES;
  }


}
