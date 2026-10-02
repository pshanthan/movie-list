import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent implements OnInit {
  constructor() {}
  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}
}
