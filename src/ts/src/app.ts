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

const accounting = new Department('e1', 'Accounting');
// accounting.id
accounting.describe();
console.log('finished')

// accounting.name = 'Jack';
// accounting.describe()
