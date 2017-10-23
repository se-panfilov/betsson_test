import {Component} from '@angular/core'
import {initStorage, setStorage} from './store/storage'

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    const store = initStorage()
    setStorage(store)
  }

}
