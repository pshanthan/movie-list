import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  getMovies() {
    return this.movieService.getMovies().subscribe((m) => (this.movies = m));
  }
}
