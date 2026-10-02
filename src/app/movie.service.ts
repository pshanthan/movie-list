import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}
  private movieList = new BehaviorSubject<Movie[]>([
    {
      id: 1,
      title: 'Robot',
      director: 'Cameron',
      year: 2020,
      rating: 33,
    },
  ]);
  getMovies(): Observable<Movie[]> {
    return this.movieList.asObservable();
  }
  addMovie(m: Movie) {
    m.id = Date.now();
    this.movieList.next([...this.movieList.value, m]);
  }
  updateMovie(m: Movie) {
    const movie = this.movieList.value.find((x) => x.id === m.id);
    if (movie) {
    }
    m.id = movie?.id;
    m.title = movie?.title;
    m.director = movie?.director;
    m.rating = movie?.rating;
    m.year = movie?.year;
  }
}
