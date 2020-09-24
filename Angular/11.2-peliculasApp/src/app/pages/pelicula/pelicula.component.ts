import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-movie';
import { MovieDetails } from 'src/app/interfaces/movie-detail';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  movie: MovieDetails;
  castsActors: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.movieService.getMovieDetail(id),
      this.movieService.getCreditsMovie(id),
    ]).subscribe(([movie, cast]) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.movie = movie;
      this.castsActors = cast.filter((actor) => actor.profile_path !== null);
    });

    // this.movieService.getMovieDetail(id).subscribe((movie) => {
    //   if (!movie) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.movie = movie;
    // });

    // this.movieService.getCreditsMovie(id).subscribe((casts) => {
    //   this.castsActors = casts.filter(actor => actor.profile_path !== null);
    // });
  }

  returnPage() {
    this.location.back();
  }
}
