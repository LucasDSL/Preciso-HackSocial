import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { bookOfferDto } from "./dto/BookOffer.dto";
import { CreateInstitutionDto } from "./dto/CreateInstitution.dto";

import { InstitutionEntity } from "./Institution.entity";

import { OfferEntity } from "src/Offer/Offer.entity";
import { OfferService } from "src/Offer/Offer.service";

@Injectable()
export class InstitutionService {
    constructor(
        @InjectRepository(InstitutionEntity)
        private InstitutionRepository: Repository<InstitutionEntity>,

        @InjectRepository(OfferEntity)
        private OfferRepository: Repository<OfferEntity>,
    
        @Inject(forwardRef(() => OfferService))
        private readonly offerService: OfferService
    ) {}

    findOne(institutionID: number): Promise<InstitutionEntity> {
        return this.InstitutionRepository.findOne({where: {institutionID: institutionID}})
    }

    findAll(): Promise<InstitutionEntity[]> {
        return this.InstitutionRepository.find()
    }

    findWithOffers(institutionID: number): Promise<InstitutionEntity> {
        return this.InstitutionRepository.findOne({where: {institutionID: institutionID}, relations: ['offers']})
    }

    create(createInstitutionDto:CreateInstitutionDto) {
        const institution = this.InstitutionRepository.create(createInstitutionDto)

        this.InstitutionRepository.save(institution)

        return createInstitutionDto
    }

    remove(institutionID: number) {
        return this.InstitutionRepository.delete(institutionID)
    }

   async book(bookOfferDto: bookOfferDto) {
        const offer = await this.offerService.findOne(bookOfferDto.offerID)
        const institution = await this.findOne(bookOfferDto.institutionID)
        institution.offers.push(offer)

        const booked = await this.InstitutionRepository.preload(institution)
        this.InstitutionRepository.save(booked)

        return booked


    }
    
}