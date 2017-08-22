import { Component } from '@angular/core';
import { HttpWrapper } from '@briisk/http-wrapper';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    http: HttpWrapper,
  ) {
    http.setBaseUrl(environment.URL);
    http.setHeader('Content-Type', 'application/vnd.api+json');
  }
}
