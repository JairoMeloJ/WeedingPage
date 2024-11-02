import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routing.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutesModule,
        FeaturesModule     
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
