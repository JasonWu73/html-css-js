import {Commodity, Merchandise} from "../product/product";

export interface Customer {
  name: string,
  shoppingCart: Commodity[]
}

export function getShoppingCar(name: string): Customer {
  return {name, shoppingCart: []};
}

export function addCommodity(
  consumer: Customer,
  commodity: Commodity
) {
  consumer.shoppingCart.push(commodity);
}

export function createCommodity(
  name: Merchandise,
  price: number
): Commodity {
  return {name, price};
}
