import {Component, OnInit, Input} from '@angular/core'
import {Movie} from "../movie"

@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.css']
})

export class MoviesListItemComponent implements OnInit {

  baseImgUrl = '../assets/images/movie-covers/'

  @Input() movie: Movie

  constructor() {
  }

  ngOnInit() {
  }

}
