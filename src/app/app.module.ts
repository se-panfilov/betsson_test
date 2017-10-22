import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {MoviesListComponent} from './movies-list/movies-list.component'
import {MovieItemComponent} from './movie-item/movie-item.component'
import {MovieDetailComponent} from './movie-detail/movie-detail.component'
import {MoviesComponent} from './movies/movies.component'
import {MovieService} from './movie.service'

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
