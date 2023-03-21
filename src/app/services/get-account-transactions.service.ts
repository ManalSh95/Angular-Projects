import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class GetAccountTransactionsService {

  private apiUrl = 'http://localhost:7243/api/GetAccountTransactions/';

  constructor(private http: HttpClient) { }

  getAccountTransactions(id: string): Observable<Transaction[]> {
    const url = this.apiUrl + id;
    return this.http.get<Transaction[]>(url);
  }
}
