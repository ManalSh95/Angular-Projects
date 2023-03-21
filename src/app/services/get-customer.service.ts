import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})

export class GetCustomerService {

  private apiUrl = 'http://localhost:7243/api/GetCustomer/';

  constructor(private http: HttpClient) { }

  getCustomer(id: string): Observable<Customer> {
    const url = this.apiUrl + id;
    return this.http.get<Customer>(url);
  }
}
