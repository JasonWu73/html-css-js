import '../css/style.css';

// validation decorator
interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[] // ['required', 'positive']
  }
}

const registeredValidators: ValidatorConfig = {};

function Required(targetPrototype: any, propertyName: string) {
  const validatorName = 'required';
  const storedTargetName = targetPrototype.constructor.name;
  registerValidator(validatorName, storedTargetName, propertyName);
}

function Positive(targetPrototype: any, propertyName: string) {
  const validatorName = 'positive';
  const storedTargetName = targetPrototype.constructor.name;
  registerValidator(validatorName, storedTargetName, propertyName);
}

function registerValidator(
  validatorName: string,
  storedTargetName: string,
  propertyName: string
) {
  const storedValidator = registeredValidators[storedTargetName];
  if (storedValidator) {
    const constraints = storedValidator[propertyName];
    if (!constraints) {
      storedValidator[propertyName] = [ validatorName ];
      return;
    }
    if (constraints && constraints.indexOf(validatorName) === -1) {
      constraints.push(validatorName);
    }
    return;
  }

  registeredValidators[storedTargetName] = {
    [propertyName]: [ validatorName ]
  };
}

function validate(targetObject: { [index: string]: any }):
  [
    isPassed: boolean,
    errors: { property: string, value: any, message: string }[]
  ] {
  console.log('validate...', registeredValidators);
  const storedTargetName = targetObject.constructor.name;
  const storedValidator = registeredValidators[storedTargetName];
  if (!storedValidator) {
    return [ true, [] ];
  }

  let isPassed = true;
  const errors: { property: string, value: any, message: string }[] = [];
  for (const key in targetObject) {
    if (!storedValidator[key]) {
      continue;
    }

    const constraints = storedValidator[key];
    constraints.forEach(constraint => {
      if (constraint === 'required') {
        if (targetObject[key]) {
          return;
        }

        isPassed = false;
        errors.push({
          property: key,
          value: targetObject[key],
          message: 'Must be required'
        });
      }

      if (constraint === 'positive') {
        if (targetObject[key] > 0) {
          return;
        }

        isPassed = false;
        errors.push({
          property: key,
          value: targetObject[key],
          message: "Must be positive number"
        });
      }
    });
  }

  return [ isPassed, errors ];
}

class Course {
  @Required
  title: string;
  @Positive
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector('form') as HTMLFormElement;
courseForm.addEventListener('submit', event => {
  event.preventDefault();

  const titleElement = document.querySelector(
    'input[placeholder="Course Title"]'
  ) as HTMLInputElement;

  const priceElement = document.querySelector(
    'input[placeholder="Course Price"]'
  ) as HTMLInputElement;

  const tile = titleElement.value;
  const price = +priceElement.value;


  const createdCourse = new Course(tile, price);

  const [ isPassed, errors ] = validate(createdCourse);
  if (!isPassed) {
    console.error(errors);
    return;
  }

  console.log('createdCourse: ', createdCourse);

  titleElement.value = '';
  priceElement.value = '';
});

// ========================================

// access and method decorator return descriptor object
/**
 * 自动绑定 this 关键字,
 * 从而可在 addEventListener(event, object.method) 中直接使用.
 *
 * @param target 目标原型链对象
 * @param methodName 方法名
 * @param descriptor 属性描述符
 */
/*
function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    }
  };
  return adjustedDescriptor;
}

class User {
  private readonly _username: string;

  constructor(username: string) {
    this._username = username;
  }

  @AutoBind
  printUsername() {
    console.log(this._username);
  }
}

const buttonElement = document.querySelector('button')!;
const user = new User('Jason');
buttonElement.addEventListener('click', user.printUsername);
*/

// ========================================

// Class decorator can return new constructor function
/*
const WithTemplate = (template: string, hookId: string) => {
  console.log('Class decorator!');
  return function <T extends { new(...args: any[]): { title: string } }>(
    originalConstructor: T
  ) {
    console.log('Original constructor!');
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super(...args);

        console.log('Instantiated: ', this);

        const element = document.getElementById(hookId);
        if (!element) {
          return;
        }

        element.innerHTML = template;

        if (this.title) {
          document.querySelector('h1')!.textContent = this.title;
        }
      }
    };
  };
};

@WithTemplate('<h1>Hello TypeScript!</h1>', 'app')
class Product {
  title: string;

  constructor(title: string) {
    console.log('Instantiate product!');
    this.title = title;
  }
}

const jeans = new Product('');
console.log(jeans);
*/

// ========================================

// When decorate execution
/*
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
*/

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
