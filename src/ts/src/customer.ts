/// <reference path="product.ts"/>

namespace Customer {

  import Commodity = Product.Commodity;
  import Merchandise = Product.Merchandise;

  export interface Consumer {
    name: string,
    shoppingCart: Commodity[]
  }

  export function getShoppingCar(name: string): Consumer {
    return {name, shoppingCart: []};
  }

  export function addCommodity(
    consumer: Consumer,
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
