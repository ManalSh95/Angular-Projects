import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateNewAccountService {

  private apiUrl = 'http://localhost:7243/api/CreateCustomerAccount/';

  constructor(private http: HttpClient) { }

  createNewCustomerAccount(customerId: string, accountName:string) :Observable<string>{
    const url = this.apiUrl + customerId;
    const body = {accountName};
    return this.http.post<string>(url, body);
  }
}
