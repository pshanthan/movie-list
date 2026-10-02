import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../models/Movie';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() {
    return this.movieService.getMovies().subscribe((m) => (this.movies = m));
  }
}
