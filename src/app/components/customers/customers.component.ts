import { Component, OnInit } from '@angular/core';
import { Customer } from './../../models/Customer';
import { GetCustomersService } from './../../services/get-customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  title = "All Customers";

  customers:Customer[] = [];
  viewModal:boolean;
  customerId:string;

  constructor(private customerService: GetCustomersService){}

  ngOnInit(): void {

    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    })

    this.viewModal = false;
    
  }

  openModal (id:string) {
    this.viewModal = true;
    this.customerId = id;
  }

  onModalClosed(event: boolean){
    this.viewModal = false;
  }
}
