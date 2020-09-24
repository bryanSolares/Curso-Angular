import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  movies: Movie[] = [];
  textoBuscado = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.textoBuscado = params['texto'];
      this.movieService.searchMovie(params['texto']).subscribe((movies) => {
        this.movies = movies;
        console.log(movies);
      });
    });
  }
}
