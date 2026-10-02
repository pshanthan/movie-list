import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  newMovie: Movie | null = null;
  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}
  onSubmit() {
    const addedMovie = this.movieForm.getRawValue();
    this.newMovie = {
      title: String(addedMovie.title),
      rating: Number(addedMovie.rating),
      year: Number(addedMovie.year),
      director: String(addedMovie.director),
    };
    this.movieService.addMovie(this.newMovie);
  }
}
