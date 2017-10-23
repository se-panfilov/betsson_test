import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MoviesListComponent } from './movies-list/movies-list.component'
import { MoviesListItemComponent } from './movies-list-item/movies-list-item.component'
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { MoviesPageComponent } from './movies-page/movies-page.component'
import { MovieService } from './movie.service'
import { GenreService } from "./genre.service"
import { MoviesSearchComponent } from './movies-search/movies-search.component'
import { MoviesFiltersListComponent } from './movies-filters-list/movies-filters-list.component'
import { MoviesFilterItemComponent } from './movies-filter-item/movies-filter-item.component'
import { AppRoutingModule } from "../app-routing.module"

@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesListItemComponent,
    MovieDetailComponent,
    MoviesPageComponent,
    MoviesSearchComponent,
    MoviesFiltersListComponent,
    MoviesFilterItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieService, GenreService],
  //bootstrap: [AppComponent]
})

export class MoviesModule {
}
