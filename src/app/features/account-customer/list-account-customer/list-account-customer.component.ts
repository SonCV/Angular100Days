import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car';

@Component({
  selector: 'app-list-account-customer',
  templateUrl: './list-account-customer.component.html',
  styleUrls: ['./list-account-customer.component.scss']
})
export class ListAccountCustomerComponent implements OnInit {

  cars: Car[] = [
    {vin: 'vin1', brand: 'brand1', color: 'color1', year: new Date()}
  ] as Car[];

  constructor() { }

  ngOnInit(): void {
    // this.initData();
  }

  initData() {
    let i;
    for(i = 1; i < 50; i++) {
      let car: Car;
      car.vin = 'vin' + i;
      car.brand = 'brand'  + i;
      car.color = 'color' + i;
      car.year = new Date();
      this.cars.push(car);
    }
    console.log('cars : ', this.cars)
  }

}
