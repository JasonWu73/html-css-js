import {
  addCommodity,
  createCommodity,
  getShoppingCar
} from "./customer/customer";
import {Merchandise} from "./product/product";

const jason = getShoppingCar('Jason');

const jeans = createCommodity(Merchandise.UNIQLO_JEANS, 79);
addCommodity(jason, jeans);

console.log(jason);
