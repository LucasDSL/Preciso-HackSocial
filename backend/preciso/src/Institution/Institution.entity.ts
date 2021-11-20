import { OfferEntity } from "src/Offer/Offer.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InstitutionEntity {
    @PrimaryGeneratedColumn()
    institutionID: number

    @Column()
    institutionName: string

    @Column()
    institutionPhone: string

    @Column({ nullable: true })
    institutionLocation: string


    @OneToMany(() => OfferEntity, (offer) => offer.institution)
    offers: OfferEntity[]
}