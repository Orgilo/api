
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {
    
    @PrimaryGeneratedColumn({ name: 'menu_id', type: 'int' })
    id: number;
     
    
    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;

    
    @Column({ name: 'price', type: 'varchar', length: 100 })
    price: string;
    
    @Column({ name: 'category', type: 'varchar', length: 100 })
    category: string;

    @Column({name: 'image', type: 'varchar',  length: 100  })
    image: string;

}
