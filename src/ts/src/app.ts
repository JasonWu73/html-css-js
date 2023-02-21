class Department {
  name: string

  constructor(name: string) {
    this.name = name;
  }
}

const accountingDepartment = new Department('Accounting');
console.log(accountingDepartment);
