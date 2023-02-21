class Department {
  name: string
  private employees: string[] = []

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department): void {
    console.log(`Department: ${this.name}`, this);
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeeInformation(): void {
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');
accounting.addEmployee('Jason');
accounting.printEmployeeInformation();

// accounting.employees = ['Bruce', 'Jack'];
// accounting.printEmployeeInformation();
