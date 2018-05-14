import { Component } from '@angular/core';
import { HttpWrapper } from '@briisk/http-wrapper';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  param = {
    value: 'world3',
  };

  constructor(
    http: HttpWrapper,
    translate: TranslateService,
  ) {
    http.setBaseUrl(environment.URL);
    http.setHeader('Content-Type', 'application/vnd.api+json');

    translate.setDefaultLang('en');
    translate.use('en');
  }
}
