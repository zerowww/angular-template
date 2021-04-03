import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
	selector: 'tmp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private translocoService: TranslocoService) {}

	onFr(): void {
		this.translocoService.setActiveLang('fr');
	}

	onEn(): void {
		this.translocoService.setActiveLang('en');
	}
}
