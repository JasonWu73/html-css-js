/// <reference path="customer/customer.ts"/>

namespace App {

  import getShoppingCar = App.getShoppingCar;
  import createCommodity = App.createCommodity;
  import Merchandise = App.Merchandise;
  import addCommodity = App.addCommodity;

  const jason = getShoppingCar('Jason');

  const jeans = createCommodity(Merchandise.UNIQLO_JEANS, 79);
  addCommodity(jason, jeans);

  console.log(jason);
}
