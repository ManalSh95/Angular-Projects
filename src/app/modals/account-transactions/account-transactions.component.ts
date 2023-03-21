import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';

import { GetAccountTransactionsService } from 'src/app/services/get-account-transactions.service';

@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnChanges {
  @Input() viewTransactionsModal:boolean;
  @Input() title: string;
  @Input() accountId: string;
  @Output() closed = new EventEmitter<boolean>();

  updatedId: string;
  transactions: Transaction[] = [];

  constructor(private getTransactions:GetAccountTransactionsService){}

  ngOnChanges(changes: SimpleChanges){
    if(changes['accountId'] && this.accountId){

      this.updatedId = this.accountId;

      this.getTransactions
      .getAccountTransactions(this.accountId)
      .subscribe(transactions => {
             this.transactions = transactions;
           })
    }
  }

  closeModal(){
    this.viewTransactionsModal = false;
    this.closed.emit(true);
  }
}
