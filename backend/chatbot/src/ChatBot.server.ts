import * as venom from 'venom-bot'
import { Offer } from './ChatBot.interfaces';

import { getStage } from './ChatBot.service'



venom.create('preciso').then((client) => startBot(client)).catch((error) => console.log(error));

async function startBot(client: venom.Whatsapp) {
    var offer = {} as Offer
    var stageNumber: number = 0
    var messageFrom: string
    var reply
    client.onMessage(async (message) => {
        console.log(message)
        messageFrom = message.from

        var response = await getStage(message, stageNumber, offer)
        stageNumber = response[1]
        reply = response[0]
        offer = response[2]

        client.sendText(messageFrom, reply).catch((error) => console.log(error))
    })

    
}

