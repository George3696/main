import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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
}
