import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getCartelera().subscribe(data => {
      this.movies = data.results;
    });
  }

}
