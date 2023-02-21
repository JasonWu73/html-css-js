class Department {
  // private readonly id: string
  // private readonly name: string
  protected employees: string[] = []

  constructor(
    private readonly id: string,
    public readonly name: string
  ) {
    // this.id = id;
    // this.name = name;
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

const iTDepartment = new ItDepartment('e1', ['Bruce', 'Jack']);
// iTDepartment.addEmployee('Jason');
// iTDepartment.addEmployee('Kitty');

iTDepartment.mostRecentEmployee = 'Jason';
iTDepartment.mostRecentEmployee = 'Kitty';
console.log(iTDepartment.mostRecentEmployee);
