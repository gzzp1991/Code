class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name: ' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
    printMeeting() {
        console.log('Generating accounting reports...');
    }
}
let department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
