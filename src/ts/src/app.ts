class Department {
  // private readonly id: string
  // private readonly name: string
  private employees: string[] = []

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

  constructor(id: string, public administrators: string[]) {
    super(id, 'IT');
  }

  printAdministratorInformation() {
    console.log(this.administrators, this)
  }
}

const iTDepartment = new ItDepartment('e1', ['Jason', 'Bruce']);
iTDepartment.describe();
iTDepartment.printAdministratorInformation();
