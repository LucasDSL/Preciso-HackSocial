import { CustomerEntity } from "src/Customer/Customer.entity";
import { InstitutionEntity } from "src/Institution/Institution.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class OfferEntity {
    @Column()
    type: string

    @Column({ type: 'boolean' })
    isAvailable: boolean

    @Column()
    location: string

    @ManyToOne(() => CustomerEntity, (customer) => customer.offers)
    customer: CustomerEntity

    @ManyToOne(() => InstitutionEntity, (institution) => institution.offers)
    institution: InstitutionEntity
}