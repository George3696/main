import { Injectable } from '@nestjs/common';
import { EmployeeRepo } from './data-entity/employees.entity';
@Injectable()
export class AppService {
  // constructor() {}
  employees: any = [];

  onboardEmployee(data: any) {
    try {
      this.employees.forEach((employee) => {
        if (employee.name === data.name) {
          throw new Error('Employee already onboarded.');
        }
      });
      const employeeId = Math.floor(Math.random() * 1000);
      const companyMail = `${data.name.toLowerCase()}@surfboard.se`;
      const newEmp = { ...data, employeeId, companyMail };
      this.employees.push(newEmp);
      return newEmp;
    } catch (err) {
      return err.message;
    }
  }
  getEmployee() {
    const data = this.employees;
    return data;
  }
  getEmployeeById(data: any) {
    return this.employees.filter((v) => v.employeeId === data.employeeId);
  }

  fireEmployee(data: any) {
    const empId = data.employeeId;
    const emp = this.employees;
    const idIndex = emp.map((v) => v.employeeId).indexOf(empId);
    const fired = emp.splice(idIndex, 1);
    return `you are fired`;
  }
  updateEmployee(data: any) {
    const empId = data.employeeId;
    let dbData;
    let dbIndex;
    this.employees.forEach((v, i) => {
      if (empId === v.employeeId) {
        dbData = { ...v };
        dbIndex = i;
      }
    });
    if (!dbData) return 'No data found for the given id';

    const updatedData = {
      ...dbData,
      ...data,
    };

    console.log('updated data', updatedData);
    console.log('db', JSON.stringify(this.employees));
    this.employees.splice(dbIndex, 1);
    this.employees.push(updatedData);
    console.log('UPDATED db', JSON.stringify(this.employees));
    return this.employees;
  }
}
