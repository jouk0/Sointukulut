import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { KansiComponent } from './kansi/kansi.component';
import { SisallysluetteloComponent } from './sisallysluettelo/sisallysluettelo.component';
import { JohdantoComponent } from './johdanto/johdanto.component';
import { ErikoisotteetComponent } from './erikoisotteet/erikoisotteet.component';
import { FlamenkoComponent } from './flamenko/flamenko.component';
import { OmatriffitComponent } from './omatriffit/omatriffit.component';
import { PowerChordRiffitComponent } from './power-chord-riffit/power-chord-riffit.component';
import { PerusSointukulutComponent } from './perus-sointukulut/perus-sointukulut.component';
import { SanoitusOhjeComponent } from './sanoitus-ohje/sanoitus-ohje.component';
import { SkaalatComponent } from './skaalat/skaalat.component';
import { SanoitusKoneComponent } from './sanoitus-kone/sanoitus-kone.component';
import { JukanComponent } from './jukan/jukan.component';
import { UudetRiffitComponent } from './uudet-riffit/uudet-riffit.component';
import { AhdchComponent } from './ahdch/ahdch.component';
import { EahcsharpComponent } from './eahcsharp/eahcsharp.component';
import { EgSharpAsharpCDSharpComponent } from './eg-sharp-asharp-cdsharp/eg-sharp-asharp-cdsharp.component';

@NgModule({
  declarations: [
    AppComponent,
    EtusivuComponent,
    KansiComponent,
    SisallysluetteloComponent,
    JohdantoComponent,
    ErikoisotteetComponent,
    FlamenkoComponent,
    OmatriffitComponent,
    PowerChordRiffitComponent,
    PerusSointukulutComponent,
    SanoitusOhjeComponent,
    SkaalatComponent,
    SanoitusKoneComponent,
    JukanComponent,
    UudetRiffitComponent,
    AhdchComponent,
    EahcsharpComponent,
    EgSharpAsharpCDSharpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
