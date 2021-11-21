import { OfferEntity } from "src/Offer/Offer.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CustomerEntity {
    @PrimaryGeneratedColumn()
    customerID: number

    @Column({ unique: true, default: null })
    customerVenomID: string

    @Column()
    customerName: string

    @Column({ nullable: true })
    lastMessage?: string

    @OneToMany(() => OfferEntity, (offer) => offer.customer)
    offers: OfferEntity[]
}