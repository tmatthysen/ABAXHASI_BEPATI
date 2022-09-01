import { drink } from './../../interfaces/drink';
import { DrinksSvcService } from './../../services/drinks-svc.service';
import { OrderComponent } from './../order/order.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  
  constructor() {}

  ngOnInit(): void {
    
  };

}

