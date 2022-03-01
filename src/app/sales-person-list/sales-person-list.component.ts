import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Cody", "Chen", "codychen@gmail.com", 10000),
    new SalesPerson("Cody2", "Chen", "codychen2@gmail.com", 20000),
    new SalesPerson("Cody3", "Chen", "codychen3@gmail.com", 30000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
