import { Component, OnInit } from '@angular/core'
import { MovieService } from "../movie.service"
import { Movie } from "../movie"
import { BASE_IMG_URL } from "../constants/images"
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.styl']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie

  BASE_IMG_URL = BASE_IMG_URL

  constructor (private movieService: MovieService, private route:ActivatedRoute) {
  }

  async getMovie (id: number): Promise<any> {
    return this.movieService.getMovie(id)
  }

  async ngOnInit () {
    const id = this.route.snapshot.params['id']
    this.movie = await this.getMovie(id)
  }

}
