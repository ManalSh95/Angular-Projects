import { TestBed } from '@angular/core/testing';

import { CreateDepositTransactionService } from './create-deposit-transaction.service';

describe('CreateDepositTransactionService', () => {
  let service: CreateDepositTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDepositTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
