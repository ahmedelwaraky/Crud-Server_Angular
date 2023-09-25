import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { PortoflioComponent } from './component/portoflio/portoflio.component';
import { ProductDeatailsComponent } from './component/products/product-deatails/product-deatails.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductFormComponent } from './component/products/product-form/product-form.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portoflio', component: PortoflioComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'products/:id', component: ProductDeatailsComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: 'addProduct', component: ProductFormComponent },
  // {path: "productforms", component:ProductFormComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
