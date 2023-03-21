import { TestBed } from '@angular/core/testing';

import { GetAccountTransactionsService } from './get-account-transactions.service';

describe('GetAccountTransactionsService', () => {
  let service: GetAccountTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAccountTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
