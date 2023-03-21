import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerAccountsService {

  private apiUrl = 'http://localhost:7243/api/GetCustomerAccounts/';

  constructor(private http: HttpClient) { }

  getCustomerAccounts(id: string): Observable<Account[]> {
    const url = this.apiUrl + id;
    return this.http.get<Account[]>(url);
  }
}
