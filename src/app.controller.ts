import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('surfboard')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ON BOARDING EMPLOYEES
  @Post('new-employee')
  onboardEmployee(@Body() data: any) {
    /**Validation */
    
    const response = this.appService.onboardEmployee(data);
    return response;
  }


  // GET-ALL-EMPLOYEES
  @Post ('get-all-employee')
  getEmployee(){
    const response = this.appService.getEmployee();
    return response ;
  }
  /**GET-EMPLOYEE-BY-ID*/
  @Post ('get-employee-by-id')
  getEmployeeById(@Body() data: any){
      const response = this.appService.getEmployeeById(data);
      return response ;
  }
  /**FIRE-EMPLOYEES*/
  @Post('fire-employee')
  fireEmployee(@Body() data: any) {
    const response = this.appService.fireEmployee(data);
    return response;
  }
  //Update employee
  @Post('update-employee')
  updateEmployee(@Body() data: any){
    const response = this.appService.updateEmployee(data)
    return response ;
  }
}

//    surfboard/new-employee
// surfboard/get-all-employee