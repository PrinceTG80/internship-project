import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { PdtComponent } from './pdt/pdt.component';
import { ProfileviewComponent } from './profileview/profileview.component';
import { ResourcesComponent } from './resources/resources.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WomenComponent } from './women/women.component';


const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'prefix',
    component: HomepageComponent
  },
  // {
  //   path: 'hom',
  //   redirectTo: 'home',
  //   pathMatch: 'prefix' // prefix
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },

  {
    path: 'product',
    component:PdtComponent
  },
  {
    path: 'cart',
    component:CartComponent
  },
  {
    path: 'profile',
    component: ProfileviewComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{    
    // Restore the last scroll position
    scrollPositionRestoration : "enabled",
    scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled",}
    )],
  exports: [RouterModule],
  

  
})
export class AppRoutingModule { }
