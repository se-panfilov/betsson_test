import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {FormsModule} from '@angular/forms'
import {MoviesListComponent} from './movies-list/movies-list.component'
import {MoviesListItemComponent} from './movies-list-item/movies-list-item.component'
import {MovieDetailComponent} from './movie-detail/movie-detail.component'
import {MoviesPageComponent} from './movies-page/movies-page.component'
import {MovieService} from './movie.service'
import {GenreService} from "./genre.service"
import {MoviesSearchComponent} from './movies-search/movies-search.component'
import {MovieFiltersComponent} from './movie-filters/movie-filters.component'
import {MovieFilterItemComponent} from './movie-filter-item/movie-filter-item.component'
import {AppRoutingModule} from "../app-routing.module"

@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesListItemComponent,
    MovieDetailComponent,
    MoviesPageComponent,
    MoviesSearchComponent,
    MovieFiltersComponent,
    MovieFilterItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieService, GenreService],
  //bootstrap: [AppComponent]
})

export class MoviesModule { }