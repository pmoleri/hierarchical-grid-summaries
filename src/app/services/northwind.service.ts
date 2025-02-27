import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrdersType } from '../models/northwind/orders-type';
import { Northwind } from '../static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getOrders(): Observable<OrdersType[]> {
    return of(Northwind['OrdersType']);
  }
}
