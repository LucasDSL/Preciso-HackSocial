import * as venom from 'venom-bot'
import { stage0, stage1, stage2, stage3, stage4, stage5, stage6 } from './Stages'
import { Requests }  from './requests'
import { Offer } from './ChatBot.interfaces'


export class Stage {
    constructor(
        private readonly requests: Requests
    ) {}
    
    async getStage(message: venom.Message, isFirstMessage: boolean, stage: number, offer: Offer){
        const customer = await this.requests.getCustomerByID(message)
    
        if (customer.data != '') {
            isFirstMessage = true
            const response = await this.requests.postCustomer(message.sender)

            if(response == 200) {
                return stage0(stage)
            }
            return response.toString    //    OLHAR DEPOIS!!!
        }

        if (isFirstMessage || stage == 0) return stage0(stage) 
    
        else {
            if (stage == 1) {
                return stage1(stage)
            }

            if(stage == 2) {
                offer.venomID = message.sender.id
                offer.location = message.body
                return stage2(stage, message.body)
            }

            if(stage == 3) {
                return stage3(stage, message.body)
            }

            if(stage == 4) {
                offer.name = message.body
                return stage4(stage, message.body)
            }

            if(stage == 5) {
                return stage5(stage, message.body)
            }

            if(stage == 6) {
                offer.isAvailable = true
                offer.description = message.body
                return stage6(stage, offer)
            }

            if(stage == 7) {
                const response = await this.requests.postOffer(offer)

                if(response == 200) {
                    return stage0(stage)
                }
                return response.toString
            }
        }
    }
}
