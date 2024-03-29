import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employees, EmployeeRepo } from './data-entity/employees.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test',
      entities: [Employees],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([EmployeeRepo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
