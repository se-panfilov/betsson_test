import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {MoviesComponent} from './movies/movies.component'
import {MovieDetailComponent} from './movie-detail/movie-detail.component'

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'movies', component: MoviesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
