import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpWrapper } from '@briisk/http-wrapper';

describe('AppComponent', () => {
  const mockHttpWrapper = {
    setBaseUrl: jasmine.createSpy('setBaseUrl'),
    setHeader: jasmine.createSpy('setHeader'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: HttpWrapper, useValue: mockHttpWrapper },
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
