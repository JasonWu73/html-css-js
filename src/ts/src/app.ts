/// <reference path="customer.ts"/>

namespace App {

  import getShoppingCar = Customer.getShoppingCar;
  import createCommodity = Customer.createCommodity;
  import Merchandise = Product.Merchandise;
  import addCommodity = Customer.addCommodity;

  const jason = getShoppingCar('Jason');

  const jeans = createCommodity(Merchandise.UNIQLO_JEANS, 79);
  addCommodity(jason, jeans);

  console.log(jason);
}
