import { Entity , Column , PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity()
export class Orders {
   @PrimaryGeneratedColumn()
   id:string

   @Column()
   userID:number

   @Column()
   marketID:number

   @Column()
   comment:string

   @Column()
   ordered_time:Timestamp
}