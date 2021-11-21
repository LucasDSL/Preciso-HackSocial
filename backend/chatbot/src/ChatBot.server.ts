import * as venom from 'venom-bot'
import { Offer } from './ChatBot.interfaces';

import { Stage } from './ChatBot.service'
import { Requests } from './requests';

const request = new Requests
const stage = new Stage(request)

venom.create('preciso').then((client) => startBot(client)).catch((error) => console.log(error));

async function startBot(client: venom.Whatsapp) {
    var isFirstMessage: boolean = true
    var offer: Offer
    var stageNumber: number
    var messageFrom: string
    var reply
    client.onMessage((message) => {
        reply = stage.getStage(message, isFirstMessage, stageNumber, offer)
        messageFrom = message.from
    })
    client.sendText(messageFrom, reply)
}

