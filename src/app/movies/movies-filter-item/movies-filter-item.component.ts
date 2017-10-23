import {Component, Input, OnInit} from '@angular/core'
import {Genre} from "../genre"

@Component({
  selector: 'movies-filter-item',
  templateUrl: './movies-filter-item.component.html',
  styleUrls: ['./movies-filter-item.component.css']
})
export class MoviesFilterItemComponent implements OnInit {

  @Input() genre: Genre

  constructor() {
  }

  ngOnInit() {
  }

}
