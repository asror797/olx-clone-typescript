import { Entity , PrimaryGeneratedColumn , Column } from "typeorm";


@Entity()
export class Markets {
   @PrimaryGeneratedColumn()
   id:string

   @Column()
   market_name:string
}
