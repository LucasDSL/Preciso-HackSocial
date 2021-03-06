import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CustomerEntity } from "./Customer.entity";



@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private CustomerRepository: Repository<CustomerEntity>
    ) {}

    async findByVenomID(venomID: string): Promise<CustomerEntity[]> {
        return await this.CustomerRepository.find({where: {customerVenomID: venomID} })
    }

    findOne(customerID: number): Promise<CustomerEntity> {
        return this.CustomerRepository.findOne(customerID)
    }

    create(createCustomer: CustomerEntity) {
        const customer = this.CustomerRepository.create(createCustomer)

        this.CustomerRepository.save(customer)
    }

    async updateLastMessage(lastMessage: string, customerID: number) {
        this.CustomerRepository.update( {customerID}, {lastMessage: lastMessage} )
    }

    remove(customerID: number) {
        return this.CustomerRepository.delete(customerID)
    }
    
}