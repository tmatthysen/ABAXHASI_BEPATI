import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  options: string[] = ['EFT', 'Credit Card','Instant EFT'];
  appHeading = 'ABAXHASI BEPATI';
  appBegin= 'Payment Options';
  constructor() { }

  ngOnInit(): void {
  }

}
