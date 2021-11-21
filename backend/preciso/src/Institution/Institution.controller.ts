import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { OfferEntity } from "src/Offer/Offer.entity";

import { Sender } from "venom-bot/dist/api/model/message";
import { bookOfferDto } from "./dto/BookOffer.dto";
import { CreateInstitutionDto } from "./dto/CreateInstitution.dto";

import { InstitutionEntity } from "./Institution.entity";
import { InstitutionService } from "./Institution.service";


@Controller('institution')
export class InstitutionController {
    constructor(
        private readonly institutionService: InstitutionService
    ) {}

    @Get('/byID')
    async findOne(@Body() institutionID: number): Promise<InstitutionEntity> {
        return await this.institutionService.findOne(institutionID)
    }

    @Get('')
    async findAll(): Promise<InstitutionEntity[]> {
        return await this.institutionService.findAll()
    }


    @Get('/offers')
    async findWithOffers(@Body() institutionID: number): Promise<InstitutionEntity> {
        return await this.institutionService.findWithOffers(institutionID)
    }


    @Post('new')
    create(@Body() createInstitutionDto: CreateInstitutionDto) {
        
        const institution = this.institutionService.create(createInstitutionDto)
        return institution
    }

    @Patch('new/bookOffer')
    book(@Body() bookOfferDto: bookOfferDto) {
        const offerBooked = this.institutionService.book(bookOfferDto)
        return offerBooked
    }
}