import * as venom from 'venom-bot'
import { stage0, stage1, stage2, stage3, stage4, stage5, stage6, stage7 } from './Stages'
import { getCustomerByID, postCustomer, postOffer }  from './requests'
import { Offer } from './ChatBot.interfaces'

    
export async function getStage(message: venom.Message, stage, offer: Offer){
   

   if (stage == 0){
       const customer = await getCustomerByID(message)
       console.log(customer.data)

       if (customer.data == '') {
            const postResponse = await postCustomer(message.sender)
            
            if(postResponse != 201) {
                stage = 0
                return ['Ocorreu um erro, tente novamente', stage, offer ]
            }
        }
        const response = stage0(stage)
        stage = response[1]
        const reply = response[0]
        return [reply, stage, offer]
    }  

    else {
        if (stage == 1) {
            const response = stage1(stage)
            stage = response[1]
            const reply = response[0]
            return [reply, stage, offer]
        }

        if(stage == 2) {


            const venomIDDto = message.sender.id
            const body: string = message.body

            offer.venomID = venomIDDto
            offer.location = body
            const response = stage2(stage, message.body)
            stage = response[1]
            const reply = response[0]
            return [reply, stage, offer]
        }

        if(stage == 3) {
            const response = stage3(stage, message.body)
            stage = response[1]
            const reply = response[0]
            return [reply, stage, offer]
        }

        if(stage == 4) {
            offer.name = message.body
            const response = stage4(stage, message.body)
            stage = response[1]
            const reply = response[0]
            return [reply, stage, offer]
        }

        if(stage == 5) {
            const response = stage5(stage, message.body)
            stage = response[1]
            const reply = response[0]
            return [reply, stage, offer]
        }

        if(stage == 6) {

            offer.isAvailable = true
            offer.description = message.body
            const response = stage6(stage, offer)
            stage = response[1]
            const reply = response[0]
            return [reply, stage, offer]
        }

        if(stage == 7) {
            const postResponse = await postOffer(offer)

            if(postResponse == 201) {
                const response = stage7(stage, message.body)
                stage = response[1]
                const reply = response[0]
                return [reply, stage, offer]
            }
            stage = 7
            return ['Ocorreu um erro', stage, offer]
        }
    }
}

