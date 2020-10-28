import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ImplementsPipe } from './pipes/implements.pipe';
import { NumeroPipe } from './pipes/numero.pipe';
import { StringMayusPipe } from './pipes/string-mayus.pipe';
import { StringMayusInterPipe } from './pipes/string-mayus-inter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ImplementsPipe,
    NumeroPipe,
    StringMayusPipe,
    StringMayusInterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
