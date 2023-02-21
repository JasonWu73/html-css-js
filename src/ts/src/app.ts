class Department {
  static fiscalYear = 2023
  // private readonly id: string
  // private readonly name: string
  protected employees: string[] = []

  constructor(
    private readonly id: string,
    public readonly name: string
  ) {
    // this.id = id;
    // this.name = name;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return {name};
  }

  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`, this);
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeeInformation(): void {
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  private lastEmployee: string = '';

  constructor(id: string, public administrators: string[]) {
    super(id, 'IT');
  }

  addEmployee(employee: string): void {
    if (employee === 'Jason') {
      console.log('Can not add Jason to employee');
      return;
    }

    this.employees.push(employee);
    this.lastEmployee = employee;
  }

  get mostRecentEmployee(): string {
    if (this.lastEmployee) {
      return this.lastEmployee;
    }

    throw new Error('Not Found Any Employee');
  }

  set mostRecentEmployee(employee: string) {
    this.addEmployee(employee);
  }
}

const employee = Department.createEmployee('Jason');
console.log(employee, Department.fiscalYear);

const employee1 = ItDepartment.createEmployee('Bruce');
console.log(employee1, ItDepartment.fiscalYear);
