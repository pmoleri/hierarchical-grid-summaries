import { ShipAddressType } from './ship-address-type';
import { DetailsType } from './details-type';

export interface OrdersType {
  orderID: number;
  customerID: string;
  employeeID: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: ShipAddressType;
  details: DetailsType[];
}
