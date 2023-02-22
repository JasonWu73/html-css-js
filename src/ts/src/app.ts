import {
  addCommodity,
  createCommodity,
  getShoppingCar
} from "./customer/customer.js";
import {Merchandise} from "./product/product.js";

const jason = getShoppingCar('Jason');

const jeans = createCommodity(Merchandise.UNIQLO_JEANS, 79);
addCommodity(jason, jeans);

console.log(jason);
