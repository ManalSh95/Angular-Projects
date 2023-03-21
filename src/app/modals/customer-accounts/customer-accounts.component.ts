import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { GetCustomerService } from 'src/app/services/get-customer.service';
import { GetCustomerAccountsService } from 'src/app/services/get-customer-accounts.service';
import { GetAccountTransactionsService } from 'src/app/services/get-account-transactions.service';

import { Customer } from 'src/app/models/Customer';
import { Account } from 'src/app/models/Account';
import { Transaction } from 'src/app/models/Transaction';

//import { Uuid } from 'uuid-ts';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnChanges{
  @Input() isOpen:boolean;
  @Input() title: string;
  @Input() customerId: string;
  @Output() closed = new EventEmitter<boolean>();

  selectedCustomer: Customer;
  selectedAccount: Account;

  selectedCustomerAccounts: Account[] =[];
  transactions: Transaction[] = [];

  openNewAccount:boolean;
  viewAccounts:boolean;
  viewTransactions:boolean;
  viewTransactionsModal:boolean;

  updatedId:string;
  accountId:string;
  updatedAccountId:string;

  constructor(private customerService: GetCustomerService,
     private customerAccountsService: GetCustomerAccountsService,
     private accountTransactionsService: GetAccountTransactionsService){}

  ngOnInit(): void {

    this.openNewAccount = false;
    this.viewTransactionsModal = false;

  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['customerId'] && this.customerId){

      this.updatedId = this.customerId;

      this.customerService
      .getCustomer(this.customerId)
      .subscribe(customer => {
             this.selectedCustomer = customer;
           })
    }
  }
  
  closeModal(){
    this.isOpen = false;
    this.closed.emit(true);
    this.viewAccounts = false;
  }

  showCustomerAccounts(){
    this.viewAccounts= true;

    this.customerAccountsService
    .getCustomerAccounts(this.customerId)
    .subscribe(accounts => {
      this.selectedCustomerAccounts = accounts;
    })
  }

  hideCustomerAccounts(){
    this.viewAccounts=false;
  }

  // showAccountTransactions(id:string){
  //   this.viewTransactions = true;

  //   this.accountTransactionsService
  //   .getAccountTransactions(id)
  //   .subscribe(transactions => {
  //     this.transactions = transactions;
  //   })
  // }

  // hideAccountTransactions(){
  //   this.viewTransactions = false;
  // }

  openCreateAccountModal(id:string){
    this.openNewAccount = true;
    this.viewAccounts=false;
  }

  onModalClosed(event: boolean){
    this.openNewAccount = false;
    this.viewAccounts = false;
  }

  openTransactionsModal(id:string){
    this.viewTransactionsModal = true;
    this.accountId = id;
  }

  OnTransationsModalClosed(event:boolean){
    this.viewTransactionsModal = false;
  }

}
