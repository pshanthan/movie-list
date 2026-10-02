import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
  ) {}
  newMovie: Movie | null = null;
  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
  });
  editingId: number | null = null;
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.editingId = Number(idParam);
      this.movieService.getMovies().subscribe((movies) => {
        const found = movies.find((m) => m.id === this.editingId);
        if (found) {
          this.movieForm.patchValue({
            title: found.title,
            director: found.director,
            rating: String(found.rating),
            year: String(found.year),
          });
        }
      });
    }
  }

  onSubmit() {
    const raw = this.movieForm.getRawValue();
    const movie: Movie = {
      title: raw.title,
      director: raw.director,
      rating: Number(raw.rating),
      year: Number(raw.year),
    };
    if (this.editingId) {
      movie.id = this.editingId;
      this.movieService.updateMovie(movie);
    } else {
      this.movieService.addMovie(movie);
    }
    this.movieForm.reset();
  }
}
