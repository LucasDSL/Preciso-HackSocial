import { CustomerEntity } from "src/Customer/Customer.entity";
import { InstitutionEntity } from "src/Institution/Institution.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OfferEntity {
    @PrimaryGeneratedColumn()
    offerID: number
    
    @Column({ type: 'boolean'})
    isAvailable: boolean

    @Column()
    location: string

    @Column()
    offerName: string

    @Column()
    description?: string

    @ManyToOne(() => CustomerEntity, (customer) => customer.offers)
    customer: CustomerEntity

    @ManyToOne(() => InstitutionEntity, (institution) => institution.offers)
    institution: InstitutionEntity
}