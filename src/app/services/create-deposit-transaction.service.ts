import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreateDepositTransactionService {

  private apiUrl = 'http://localhost:7243/api/CreateDepositTransaction/';

  constructor(private http: HttpClient) { }

  createDepositTransaction(accountId: string, 
    transactionName:string, transactionNote:string, transactionAmount:number) 
    {
    const url = this.apiUrl + accountId;
    const body = {accountId, transactionName, transactionNote, transactionAmount};
    return this.http.post(url, body);
  }
}
