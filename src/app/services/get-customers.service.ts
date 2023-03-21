import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})

export class GetCustomersService {

  private apiUrl = 'http://localhost:7243/api/GetAllCustomers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

}
