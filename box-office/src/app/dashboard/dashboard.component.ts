import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MOVIES } from '../models/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title: string = 'Trending Movies';
  movies: Movie[] = MOVIES;
}
