import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {
  model = ''

  constructor() {
  }

  ngOnInit() {
  }

}
