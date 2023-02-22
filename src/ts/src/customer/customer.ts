/// <reference path="../product/product.ts"/>

namespace App {

  import Commodity = App.Commodity;
  import Merchandise = App.Merchandise;

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
}
