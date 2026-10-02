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
  updateMovie(updated: Movie) {
    const current = this.movieList.value;
    const nextList = current.map((m) => (m.id === updated.id ? updated : m));
    this.movieList.next(nextList);
  }
}
