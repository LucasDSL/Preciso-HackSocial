import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { Sender } from "venom-bot/dist/api/model/message";

import { CustomerEntity } from "./Customer.entity";
import { CustomerService } from "./Customer.service";


@Controller('customer')
export class CustomerController {
    constructor(
        private readonly customerService: CustomerService
    ) {}

    @Get()
    async findOne(@Body() customerID: number): Promise<CustomerEntity> {
        return await this.customerService.findOne(customerID)
    }

    @Get('venomID')
    async findByVenomID(@Body() query): Promise<CustomerEntity> {
        const customerVenomID = query.customerVenomID
        return await this.customerService.findByVenomID(customerVenomID)[0]
    }

    @Post('new')
    create(@Body() Body) {
        const messageSender: Sender = Body.messageSender
        const customerEntity = new CustomerEntity
        customerEntity.customerVenomID = messageSender.id
        customerEntity.customerName = messageSender.shortName
        
        const customer = this.customerService.create(customerEntity)
        
        return customer
    }
}