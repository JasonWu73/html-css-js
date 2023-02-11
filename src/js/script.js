class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = name;

  printMyName = () => {
    console.log(this.name);
  };
}

const me = new Person();
me.name = 'Jason';
me.gender = 'female';
me.gender = 'unknown';
me.printMyName();
me.printGender();
