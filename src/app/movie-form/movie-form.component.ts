import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-form',
  imports: [],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  movieList = new BehaviorSubject<Movie[]>([
    {
      title: 'titanic',
      director: 'Cameron',
      year: 2026,
      rating: 22,
    },
  ]);
}
