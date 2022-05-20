import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './slider/card/card.component';
import { PopupComponent } from './popup/popup.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardComponent,
    PopupComponent,
    PersonCardComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
