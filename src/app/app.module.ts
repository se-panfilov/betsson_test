import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {NgReduxModule, NgRedux} from '@angular-redux/store'
import {StoreModule} from './store/module'
import {MoviesModule} from './movies/movies.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule,
    StoreModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
