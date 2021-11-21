import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InstitutionService } from './Institution.service';
import { InstitutionController } from './Institution.controller';
import { InstitutionEntity } from './Institution.entity';
import { OfferEntity } from 'src/Offer/Offer.entity';
import { OfferService } from 'src/Offer/Offer.service';
import { CustomerEntity } from 'src/Customer/Customer.entity';
import { CustomerService } from 'src/Customer/Customer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([InstitutionEntity]),
    TypeOrmModule.forFeature([OfferEntity]),
    TypeOrmModule.forFeature([CustomerEntity])
  ],
  providers: [InstitutionService, OfferEntity, OfferService, CustomerEntity, CustomerService],
  controllers: [InstitutionController],
  exports: [InstitutionService],
})
export class InstitutionModule {}