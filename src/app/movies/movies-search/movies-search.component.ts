import { Component, OnInit } from '@angular/core'
import { SET_MOVIE_NAME_FILTER } from '../constants/actions'
import { Storage } from '../../store/storage'

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.styl']
})
export class MoviesSearchComponent implements OnInit {
  model = ''

  constructor () {
  }

  ngOnInit () {
  }

  onChange () {
    Storage.dispatch({type: SET_MOVIE_NAME_FILTER, data: this.model})
  }

}
