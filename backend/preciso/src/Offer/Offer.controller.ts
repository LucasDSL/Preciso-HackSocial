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
   async create(@Body() createOfferDto: CreateOfferDto) {        
        const offer = await this.offerService.create(createOfferDto)
        
        return offer
    }
}