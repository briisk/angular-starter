import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const translateConfig = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: httpLoaderFactory,
    deps: [ HttpClient ],
  },
});
