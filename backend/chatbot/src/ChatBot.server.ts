import * as venom from 'venom-bot'

import { getStage } from './ChatBot.controller'

venom.create('preciso').then((client) => startBot(client)).catch((error) => console.log(error));

function startBot(client: venom.Whatsapp) {
    var isFirstMessage: boolean = true;
    client.onMessage((message) => {
        let reply = getStage(message, isFirstMessage)
        
        message.sender
        isFirstMessage = false
    })
}

