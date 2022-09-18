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
   title:string

   @Column({
      type:'varchar',
      length:64,
      nullable:false
   })
   description:string

   @Column({
      type:'bigint',
      nullable:false
   })
   price:number
}