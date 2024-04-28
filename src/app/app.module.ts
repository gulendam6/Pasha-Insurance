import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnlinepaymentComponent } from './onlinepayment/onlinepayment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GuaranteesComponent } from './guarantees/guarantees.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FaqComponent } from './faq/faq.component';
import { SimilarproductComponent } from './similarproduct/similarproduct.component';
import { ContactComponent } from './contact/contact.component';
import { PacketsComponent } from './packets/packets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnlinepaymentComponent,
    HeaderComponent,
    FooterComponent,
    GuaranteesComponent,
    FaqComponent,
    SimilarproductComponent,
    ContactComponent,
    PacketsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
