import { ThanksComponent } from './components/thanks/thanks.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderComponent } from './components/order/order.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'Login', component: LoginFormComponent},
  {path: 'Order', component: OrderComponent},
  {path: 'Payment', component: CheckoutComponent},
  {path: 'thankyou', component: ThanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
