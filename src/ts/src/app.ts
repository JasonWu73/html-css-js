class Department {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department): void {
    console.log(`Department: ${this.name}`, this);
  }
}

const accounting = new Department('Accounting');
accounting.describe();

const copiedAccounting = {
  name: `Copied ${accounting.name}`,
  describe: accounting.describe
};
copiedAccounting.describe();
