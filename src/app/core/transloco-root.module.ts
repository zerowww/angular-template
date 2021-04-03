import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import {
	Translation,
	TRANSLOCO_CONFIG,
	TRANSLOCO_LOADER,
	translocoConfig,
	TranslocoLoader,
	TranslocoModule
} from '@ngneat/transloco';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
	constructor(private httpClient: HttpClient) {}

	getTranslation(lang: string) {
		return this.httpClient.get<Translation>(`${environment.baseUrl}/assets/i18n/${lang}.json`);
	}
}

@NgModule({
	exports: [TranslocoModule],
	providers: [
		{
			provide: TRANSLOCO_CONFIG,
			useValue: translocoConfig({
				availableLangs: ['fr', 'en'],
				defaultLang: 'fr',
				fallbackLang: 'en',
				reRenderOnLangChange: true,
				prodMode: environment.production,
				flatten: {
					aot: environment.production
				},
				missingHandler: {
					logMissingKey: true,
					allowEmpty: false,
					useFallbackTranslation: true
				}
			})
		},
		{ provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
	]
})
export class TranslocoRootModule {}
