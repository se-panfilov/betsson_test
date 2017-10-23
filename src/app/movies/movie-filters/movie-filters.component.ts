import {Component, Input, OnInit} from '@angular/core'
import {Genre} from "../genre"
import {NgRedux, select} from '@angular-redux/store'
import {Observable} from "rxjs/Observable"
// import {IAppState} from "../../store"

@Component({
  selector: 'movie-filters',
  templateUrl: './movie-filters.component.html',
  styleUrls: ['./movie-filters.component.css']
})
export class MovieFiltersComponent implements OnInit {

  @Input() genres: Genre[]
  @select() count$: Observable<number>

  // constructor(private ngRedux: NgRedux<IAppState>) {}

  onClick() {
    // this.ngRedux.dispatch({ type: 'INCREMENT' })
  }

  ngOnInit() {
  }

}
