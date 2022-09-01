import { qty } from './../../interfaces/qty';
import { order } from './../../interfaces/order';
import { drink } from './../../interfaces/drink';
import { DrinksSvcService } from './../../services/drinks-svc.service';
import { CategorySvcService } from './../../services/category-svc.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table'
import {SelectionModel} from '@angular/cdk/collections';
import { eventListeners } from '@popperjs/core';
import {category} from '../../interfaces/category';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  isVissible: any = false;
  showTable: any = false;
  selectedBev:string = "--";
  categories: category[] = [];
  drinks: drink[] = [];
  qty: qty[] = [];
  orders: order[] = [];
  catFilter = '';
  selectedBeverage = '';
  selectedQuantity = '';
  

  appHeading = 'ABAXHASI BEPATI';
  appBegin= 'Imperial Wanderers Liquor Store';

  step1FG = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  step2FG = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  step3FG = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  CategoryControl = new FormControl<category | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  DrinksControl = new FormControl<drink | null>(null, Validators.required);
  QTYControl = new FormControl<qty | null>(null, Validators.required);
 


  onSelectedChange(val:any) {
    this.catFilter = val.name;
    this.isVissible = true;
    this.drinkservice.getDrinks(this.catFilter).subscribe(drinks => {
      this.drinks = drinks;
    });
    this.drinkservice.getQTY(this.catFilter).subscribe(qty => {
      this.qty = qty;
    });

  }





  email = new FormControl('', [Validators.required, Validators.email]);
  suite = new FormControl('', [Validators.required]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';

  }

  displayedColumns: string[] = ['item', 'qty', 'price'];
  dataSource = this.orders;

  emailAddress = this.email.value;
  

  
  submitInfo(bev: any, quant: any,) {
    const suiteNumber = this.suite.value
    
    console.log(bev.name, quant.option, suiteNumber)
    this.drinkservice.addOrder(suiteNumber,bev.name,quant.option,"10.00");
    
    
  }
  
  viewOrder() {
    const suiteNo = this.suite.value;
    this.drinkservice.getOrders(suiteNo).subscribe(orders => {
      this.orders = orders;
      this.showTable = true;
    });

  }

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private catservice:CategorySvcService, private drinkservice:DrinksSvcService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.catservice.getCategory().subscribe(categories => {
      this.categories = categories;
    })
  }

  

}
