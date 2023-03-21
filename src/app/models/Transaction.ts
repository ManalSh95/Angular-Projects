import { TransactionType } from "./TransactionType";

export class Transaction{
    id:string;
    name?:string;
    note?:string;
    accountId:string;
    amount:number;
    transactionDate:Date;
    transactionType:TransactionType;
}