import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageHeading = 'ABAXHASI BEPATI';
  pageHeadline = 'Introducing the exclusive GetADrink App!';
  pageSubline = 'Exclusively at Wanderers Stadium!';
  pageParagraph = 'Covenience at your finger tips...';


  constructor() { }

  ngOnInit(): void {
  }

}
