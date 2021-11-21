import { Body, Controller, Get, Post } from "@nestjs/common";

import { Sender } from "venom-bot/dist/api/model/message";
import { CreateOfferDto } from "./dto/CreateOffer.dto";

import { OfferEntity } from "./Offer.entity";
import { OfferService } from "./Offer.service";


@Controller('offer')
export class OfferController {
    constructor(
        private readonly offerService: OfferService
    ) {}

    @Get('')
    async findall(): Promise<OfferEntity[]> {
        return await this.offerService.findAll()
    }

    @Get('byID')
    async findOne(@Body() offerID: number): Promise<OfferEntity> {
        return await this.offerService.findOne(offerID)
    }


    @Post('new')
   async create(@Body() Body) {
        const createOfferDto = {} as  CreateOfferDto
        createOfferDto.offerName = Body.offerName
        createOfferDto.customerVenomID = Body.customerVenomID
        createOfferDto.description = Body.offerDescription
        createOfferDto.location = Body.offerLocation
        createOfferDto.isAvailable = Body.isAvailable      
        const offer = await this.offerService.create(createOfferDto)
        
        return offer
    }
}