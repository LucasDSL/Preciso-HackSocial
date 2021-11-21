import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerService } from "src/Customer/Customer.service";
import { Repository } from "typeorm";
import { CreateOfferDto } from "./dto/CreateOffer.dto";

import { CustomerEntity } from "src/Customer/Customer.entity";

import { OfferEntity } from "./Offer.entity";



@Injectable()
export class OfferService {
    constructor(
        @InjectRepository(OfferEntity)
        private OfferRepository: Repository<OfferEntity>,

        @InjectRepository(CustomerEntity)
        private CustomerRepository: Repository<CustomerEntity>,

        @Inject(forwardRef(() => CustomerService))
        private readonly customerService: CustomerService
    ) {}


    findOne(offerID: number): Promise<OfferEntity> {
        return this.OfferRepository.findOne({where: {offerID: offerID}})
    }

    findAll(): Promise<OfferEntity[]> {
        return this.OfferRepository.find()
    }

    async create(createOfferDto: CreateOfferDto) {
        const customer = await this.customerService.findByVenomID(createOfferDto.customerVenomID)
        
        const createOffer = new OfferEntity        
        createOffer.description = createOfferDto.description
        createOffer.offerName = createOfferDto.offerName
        createOffer.location = createOfferDto.location
        createOffer.isAvailable = createOfferDto.isAvailable
        createOffer.description = createOfferDto.description
        createOffer.customer = customer[0]

        const offer = this.OfferRepository.create(createOffer)

        this.OfferRepository.save(offer)
    }


    remove(offerID: number) {
        return this.OfferRepository.delete(offerID)
    }
    
}