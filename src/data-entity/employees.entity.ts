import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, EntityRepository, Repository } from "typeorm";


@Entity()
export class Employees extends BaseEntity {
    @PrimaryGeneratedColumn()
    EmployeeId: number ;

    @Column()
    Name: string;

    @Column()
    CompanyEmail: string;

    @Column()
    BloodGroup: string;

    @Column()
    Mobile: number;    
}

@EntityRepository(Employees)
export class EmployeeRepo extends Repository<Employees> {}