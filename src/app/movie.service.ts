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
    this.movieList.next((movieList) => [...this.movieList, m]);
  }
}
