import { TestBed } from '@angular/core/testing';

import { GetCustomerAccountsService } from './get-customer-accounts.service';

describe('GetCustomerAccountsService', () => {
  let service: GetCustomerAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCustomerAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
