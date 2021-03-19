import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PdtComponent } from './pdt/pdt.component';
import { Scroll } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProfileviewComponent } from './profileview/profileview.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ResourcesComponent } from './resources/resources.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    CardsComponent,
    CarouselComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    PdtComponent,
    CartComponent,
    ProfileviewComponent,
    ProductCardComponent,
    MenComponent,
    WomenComponent,
    ResourcesComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
