import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('surfboard')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('new-employee')
  onboardEmployee(@Body() data: any) {
    /**Validation */
    const response = this.appService.onboardEmployee(data);
    return response;
  }

  /**Fire employee */
  /**Get all employees */
  /**Get employee by id */
  /**Update employee */
}
