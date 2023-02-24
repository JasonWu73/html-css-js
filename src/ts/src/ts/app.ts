import '../css/style.css';

// When decorate execution
const Log = (target: any, name: string | symbol): void => {
  console.log('Property decorator');
  console.log('target: ', target);
  console.log('name: ', name);
};

class Product {
  @Log
  title: string;
  private _price: number;

  set price(price: number) {
    if (price > 0) {
      this._price = price;
      return;
    }

    throw new Error('Invalid price - should be positive!');
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number): number {
    return this._price * (1 + tax);
  }
}

const clay = new Product('Clay', 75);
console.log(clay);

const glasses = new Product('Glasses', 300);
console.log(glasses);

// ========================================

// accessor and parameter decorator
/*
const AccessorOrMethodLog = (
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log('Accessor or method decorator!');
  console.log('target: ', target);
  console.log('name: ', name);
  console.log('descriptor', descriptor);
};

const ParameterLog = (
  target: any,
  name: string | symbol,
  position: number
) => {
  console.log('Parameter decorator!');
  console.log('target: ', target);
  console.log('name: ', name);
  console.log('position', position);
};

class Product {
  title: string;
  private _price: number;

  @AccessorOrMethodLog
  set price(price: number) {
    if (price > 0) {
      this._price = price;
      return;
    }

    throw new Error('Invalid price - should be positive!');
  }

  constructor(title: string, @ParameterLog price: number) {
    this.title = title;
    this._price = price;
  }

  @AccessorOrMethodLog
  getPriceWithTax(@ParameterLog tax: number): number {
    return this._price * (1 + tax);
  }
}
*/

// ========================================

// property decorators
/*
const Log = (
  target: any,
  propertyName: string | symbol
): void => {
  console.log('Property decorator!')
  console.log('target: ', target);
  console.log('propertyName: ', propertyName);
};

class Product {
  @Log
  title: string;
  private _price: number;

  set price(price: number) {
    if (price > 0) {
      this._price = price;
      return;
    }

    throw new Error('Invalid price - should be positive!');
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number): number {
    return this._price * (1 + tax);
  }
}
*/

// ========================================

/*
function Logger(logMessage: string) {
  console.log('LOGGER FACTORY');
  return (constructor: Function) => {
    console.log('Logger');
    console.log(logMessage);
    console.log('constructor: ', constructor);
  };
}

const withTemplate = (template: string, hookId: string) => {
  console.log('WITH_TEMPLATE FACTORY');
  return (constructor: any) => {
    console.log('Render Template');
    const hookedElement = document.getElementById(hookId);
    if (hookedElement) {
      const person = new constructor();
      hookedElement.innerHTML = template;
      document.querySelector('h1')!.textContent = person.name;
    }
  };
};

@Logger('LOGGING - PERSON')
@withTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Jason';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);
*/
