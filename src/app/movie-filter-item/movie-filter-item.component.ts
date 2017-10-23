import {Component, Input, OnInit} from '@angular/core'
import {Genre} from "../genre"

@Component({
  selector: 'app-movie-filter-item',
  templateUrl: './movie-filter-item.component.html',
  styleUrls: ['./movie-filter-item.component.css']
})
export class MovieFilterItemComponent implements OnInit {

  @Input() genre: Genre

  constructor() { }

  ngOnInit() {
  }

}
