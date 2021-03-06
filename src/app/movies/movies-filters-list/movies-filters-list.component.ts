import { Component, Input, OnInit } from '@angular/core'
import { Genre } from '../genre'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'
import { Storage } from '../../store/storage'
import { CLEAR_GENRE_FILTER, SET_GENRE_FILTER } from '../constants/actions'

@Component({
  selector: 'app-movies-filters-list',
  templateUrl: './movies-filters-list.component.html',
  styleUrls: ['./movies-filters-list.component.styl']
})
export class MoviesFiltersListComponent implements OnInit {

  @Input() genres: Genre[]
  @select() count$: Observable<number>

  constructor () {
  }

  onClick (genre: Genre) {
    Storage.dispatch({type: SET_GENRE_FILTER, data: genre})
  }

  clear () {
    Storage.dispatch({type: CLEAR_GENRE_FILTER})
  }


  ngOnInit () {
  }

}
