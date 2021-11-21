import {Component} from '@angular/core';
import * as ons from 'onsenui';

import {KenlistComponent} from './kenlist/kenlist.component';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [ require('./app.css') ]
})
export class MyApp {
  kenlist = KenlistComponent;
  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification.');
  }
}
