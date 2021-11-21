import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OfferService } from './Offer.service';
import { OfferController } from './Offer.controller';
import { OfferEntity } from './Offer.entity';
import { CustomerEntity } from 'src/Customer/Customer.entity';
import { CustomerService } from 'src/Customer/Customer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OfferEntity]),
    TypeOrmModule.forFeature([CustomerEntity])
  ],
  providers: [OfferService, CustomerEntity, CustomerService],
  controllers: [OfferController],
  exports: [OfferService],
})
export class OfferModule {}
