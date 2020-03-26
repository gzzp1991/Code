/**
 * Abstract
 */
// abstract类不能实例化，继承类可以实例化
// abstract方法不能调用，继承类需要实现

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing');
  }
  generateReports(): void {
    console.log('Generating accounting reports...');
  }
  printMeeting(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department;
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type
