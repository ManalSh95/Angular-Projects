import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerAccountsComponent } from './modals/customer-accounts/customer-accounts.component';
import { CreateNewAccountComponent } from './modals/create-new-account/create-new-account.component';
import { AccountTransactionsComponent } from './modals/account-transactions/account-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerAccountsComponent,
    CreateNewAccountComponent,
    AccountTransactionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
