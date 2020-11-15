import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

declare const STABLE_FEATURE: boolean;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentTimeFRLocale: string;

  ngOnInit(): void {
    moment.locale('fr');
    this.currentTimeFRLocale = moment().format('LLL');
    console.log('const global:', STABLE_FEATURE);
  }
}
