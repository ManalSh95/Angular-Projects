import { Transaction } from "./Transaction";

export class Account {
    id:string;
    name?:string;
    createdAt:Date;
    customerId:string;
    balance:number | 0;
    transactions: Transaction[] = [];
}