import { Component, OnInit } from '@angular/core';


interface Animal {
  name: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  appHeading = 'Weekend Pourers';
  appBegin= 'Get started. Choose an option...'
  appCard1Head = 'Packages';
  appCard2Head = 'Specials';
  appCard3Head = 'Popular';
  appCard4Head = 'Order';


  constructor() {}

 

  ngOnInit(): void {
  }

}
