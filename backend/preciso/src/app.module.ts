import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './Customer/Customer.module';
import { CustomerEntity } from './Customer/Customer.entity';
import { OfferEntity } from './Offer/Offer.entity';
import { InstitutionEntity } from './Institution/Institution.entity';
import { CustomerController } from './Customer/Customer.controller';

import { InstitutionModule } from './Institution/Institution.module';
import { OfferModule } from './Offer/Offer.module';
import { InstitutionController } from './Institution/Institution.controller';
import { OfferController } from './Offer/Offer.controller';

@Module({
  imports: [
    CustomerModule,
    InstitutionModule,
    OfferModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mariadb',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [CustomerEntity, OfferEntity, InstitutionEntity],
        synchronize: true,
      }),
    })
  ],
  controllers: [AppController, CustomerController, InstitutionController, OfferController],
  providers: [AppService],
})
export class AppModule {}
