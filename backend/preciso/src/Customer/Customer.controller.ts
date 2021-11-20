import { Body, Controller, Get, Post } from "@nestjs/common";

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
    async findByVenomID(@Body() customerVenomID: string): Promise<CustomerEntity> {
        return await this.customerService.findByVenomID(customerVenomID)
    }

    @Post('new')
    create(messageSender: Sender) {
        const customerEntity = new CustomerEntity
        customerEntity.customerVenomID = messageSender.id
        customerEntity.customerName = messageSender.shortName
        
        const customer = this.customerService.create(customerEntity)
        
        return customer
    }
}