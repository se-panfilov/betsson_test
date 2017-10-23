import {Component, Input, OnInit} from '@angular/core';
import {Genre} from "../genre";

@Component({
  selector: 'app-movie-filters',
  templateUrl: './movie-filters.component.html',
  styleUrls: ['./movie-filters.component.css']
})
export class MovieFiltersComponent implements OnInit {

  @Input() genres: Genre[]

  constructor() { }

  ngOnInit() {
  }

}
