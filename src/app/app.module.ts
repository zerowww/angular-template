import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './core/transloco-root.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		HttpClientModule,
		TranslocoRootModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
