import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {MoviesListComponent} from './movies-list/movies-list.component'
import {MoviesListItemComponent} from './movies-list-item/movies-list-item.component'
import {MovieDetailComponent} from './movie-detail/movie-detail.component'
import {MoviesComponent} from './movies/movies.component'
import {MovieService} from './movie.service'
import {GenreService} from "./genre.service"
import {MoviesSearchComponent} from './movies-search/movies-search.component'
import {MovieFiltersComponent} from './movie-filters/movie-filters.component'
import {MovieFilterItemComponent} from './movie-filter-item/movie-filter-item.component'
import {NgReduxModule, NgRedux} from '@angular-redux/store'
import {StoreModule} from './store/module'

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesListItemComponent,
    MovieDetailComponent,
    MoviesComponent,
    MoviesSearchComponent,
    MovieFiltersComponent,
    MovieFilterItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule,
    StoreModule
  ],
  providers: [MovieService, GenreService],
  bootstrap: [AppComponent]
})

export class AppModule {}
