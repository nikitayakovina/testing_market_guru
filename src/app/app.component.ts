import { Component } from '@angular/core';
import {Store} from "@ngxs/store";
import {GetData} from "./state/recevied-data-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(new GetData());
  }
}
