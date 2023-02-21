abstract class Department {
  static fiscalYear = 2023
  // private readonly id: string
  // private readonly name: string
  protected employees: string[] = []

  protected constructor(
    protected readonly id: string,
    public readonly name: string
  ) {
    // this.id = id;
    // this.name = name;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return {name};
  }

  abstract describe(this: Department): void

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

  describe() {
    console.log(`IT Department ID - ${this.id}`)
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

const employee = new ItDepartment('e1', ['Jason']);
employee.describe();
console.log(employee);
