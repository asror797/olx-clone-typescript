import { Entity , PrimaryGeneratedColumn , Column } from "typeorm";

@Entity()
export class Products  {
   @PrimaryGeneratedColumn("uuid")
   id:string

   @Column({
      type:'varchar',
      length:64,
      nullable:false
   })
   name:string

   @Column({
      type:'varchar',
      length:64,
      nullable:false
   })
   description:string

   @Column()
   marketID:number

   @Column({
      type:'bigint',
      nullable:false
   })
   price:number
}