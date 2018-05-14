import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslatePipeMock } from './test/translate.mock';
import { TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {

  const mockTranslateService = {
    setDefaultLang: jasmine.createSpy('setBaseUrl'),
    use: jasmine.createSpy('setHeader'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        TranslatePipeMock,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: TranslateService, useValue: mockTranslateService },
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
