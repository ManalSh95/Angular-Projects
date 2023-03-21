import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CreateNewAccountService } from 'src/app/services/create-new-account.service';
import { CreateDepositTransactionService } from 'src/app/services/create-deposit-transaction.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnChanges{
  @Input() isOpen:boolean;
  @Input() title: string;
  @Input() currentCustomerId: string;
  @Output() closed = new EventEmitter<boolean>();

  initialCredit:number;
  accountName:string;
  transactionName:string;
  transactionNote:string;

  constructor(private newAccountService: CreateNewAccountService,
    private newDepositService: CreateDepositTransactionService){}

  ngOnChanges(){

  }

  closeCreateAccountModal(){
    this.isOpen = false;
    this.closed.emit(true);
  }

  onSubmit() {
     this.newAccountService.createNewCustomerAccount(this.currentCustomerId, this.accountName)
    .subscribe(async (response: any) => {
      const accountId = response.id;

      console.log(response);

if(this.initialCredit !==0){
  await this.newDepositService.createDepositTransaction(accountId, this.transactionName, this.transactionNote, this.initialCredit)
      .subscribe((response: any) => {
        console.log('Transaction created successfully');
      }, (error: any) => {
        console.error('Error creating transaction', error);
      });
    };
    }, (error: any) => {
      console.error('Error creating account', error);
    });

    this.isOpen = false;
  }
    
  }

