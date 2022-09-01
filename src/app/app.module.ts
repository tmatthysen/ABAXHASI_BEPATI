import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainComponent } from './components/main/main.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { OrderComponent } from './components/order/order.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import { DeliveryFormComponent } from './components/delivery-form/delivery-form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { ThanksComponent } from './components/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    MainComponent,
    OrderComponent,
    DeliveryFormComponent,
    CheckoutComponent,
    OrderItemsComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatCheckboxModule,
    MatListModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
