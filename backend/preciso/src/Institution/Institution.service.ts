import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateInstitutionDto } from "./dto/CreateInstitution.dto";

import { InstitutionEntity } from "./Institution.entity";



@Injectable()
export class InstitutionService {
    constructor(
        @InjectRepository(InstitutionEntity)
        private InstitutionRepository: Repository<InstitutionEntity>
    ) {}

    findOne(institutionID: number): Promise<InstitutionEntity> {
        return this.InstitutionRepository.findOne({where: {institutionID: institutionID}})
    }

    create(createInstitutionDto:CreateInstitutionDto) {
        const institution = this.InstitutionRepository.create(createInstitutionDto)

        this.InstitutionRepository.save(institution)
    }

    remove(institutionID: number) {
        return this.InstitutionRepository.delete(institutionID)
    }
    
}