import * as venom from 'venom-bot'
import { stage0 } from './Stages'
import axios from 'axios'

export async function getStage(message: venom.Message, isFirstMessage: boolean){
   const customer = axios({
    method: 'get',
    url: 'http://localhost:8080/customer/venomID',
    data: {
        customerVenomID: message.sender.id
    }
    })

    if (customer)
    
    if (isFirstMessage) {
        return stage0();
    }
}
