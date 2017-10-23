import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {MoviesPageComponent} from './movies/movies-page/movies-page.component'
import {MovieDetailComponent} from './movies/movie-detail/movie-detail.component'

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'movies', component: MoviesPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
