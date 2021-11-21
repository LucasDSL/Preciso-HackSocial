import { Message } from "venom-bot"
import { Sender } from "venom-bot/dist/api/model/message"
import axios from 'axios'
import { Offer } from "./ChatBot.interfaces"

export class Requests {

    async getCustomerByID(message: Message) {
        const customer = await axios({
            method: 'get',
            url: 'http://localhost:8080/customer/venomID',
            data: {
                customerVenomID: message.sender.id
            }
        })

        return customer
    }

    async postCustomer(sender: Sender) {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/customer/new',
            data: {
                messageSender: sender
            }
        })

        return response.status
    }

    async postOffer(offer: Offer) {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/offer/new',
            data: {
               /* offerName: offer.name,
                customerVenomID: offer.venomID,
                offerLocation: offer.location,
                offerDescription: offer.description,
                isAvailable: offer.isAvailable */
                offer: offer
            }
        })

        return response.status
    }
}