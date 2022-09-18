import { Entity , PrimaryGeneratedColumn , Column, ManyToMany, JoinTable } from "typeorm";
import { Products } from './products.entity'



@Entity()
export class Users  {
   @PrimaryGeneratedColumn("uuid")
   id:string

   @Column({
      type:'varchar',
      length:64,
      nullable:false
   })
   firstname:string

   @Column({
      type:'varchar',
      length:64,
      nullable:false
   })
   lastname:string

   @Column({
      type:'varchar',
      length:32,
      nullable:false
   })
   status:string

   @Column({
      type:'varchar',
      length:64,
      nullable:false
   })
   email:string

   @Column({
      type:'varchar',
      length:128,
      nullable:false
   })
   password:string

   @ManyToMany(type => Products) @JoinTable()
   products: Products[];
}