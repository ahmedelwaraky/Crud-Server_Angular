import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/sharedComponent/navbar/navbar.component';
import { FooterComponent } from './component/sharedComponent/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductDeatailsComponent } from './component/products/product-deatails/product-deatails.component';
import { ProductFormComponent } from './component/products/product-form/product-form.component';
import { AboutComponent } from './component/about/about.component';
import { PortoflioComponent } from './component/portoflio/portoflio.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductDeatailsComponent,
    ProductFormComponent,
    AboutComponent,
    PortoflioComponent,
    NotFoundComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
