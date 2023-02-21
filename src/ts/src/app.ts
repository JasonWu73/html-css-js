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
  private static INSTANCE: ItDepartment;

  constructor(id: string, public administrators: string[]) {
    super(id, 'IT');
  }

  static getInstance(): ItDepartment {
    if (this.INSTANCE) {
      return this.INSTANCE;
    }

    this.INSTANCE = new ItDepartment(
      'default_generated_id',
      ['Jason', 'Bruce']
    );
    return this.INSTANCE;
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

// const departmentOne = new ItDepartment("e1", ['Kitty']);
// const departmentTwo = new ItDepartment("e1", ['Kitty']);

const departmentOne = ItDepartment.getInstance();
const departmentTwo = ItDepartment.getInstance();

console.log(departmentOne === departmentTwo);
console.log(departmentOne);
