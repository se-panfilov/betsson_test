import { Component, OnInit, Input } from '@angular/core'
import { Movie } from '../movie'
import { BASE_IMG_URL } from '../constants/images'

@Component({
  selector: 'movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.css']
})

export class MoviesListItemComponent implements OnInit {

  BASE_IMG_URL = BASE_IMG_URL

  @Input() movie: Movie

  constructor () {
  }

  ngOnInit () {
  }

}
