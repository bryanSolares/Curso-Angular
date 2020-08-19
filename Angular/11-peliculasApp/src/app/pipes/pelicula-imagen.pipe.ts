import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen',
})
export class PeliculaImagenPipe implements PipeTransform {
  transform(pelicula: any, poster: boolean = false): any {
    let url = 'https://image.tmdb.org/t/p/w500';

    if (poster) {
      return url.concat(pelicula.poster_path);
    }

    if (pelicula.backdrop_path) {
      return url.concat(pelicula.backdrop_path);
    } else if (pelicula.poster_path) {
      return url.concat(pelicula.poster_path);
    } else {
      return 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg';
    }
  }
}
