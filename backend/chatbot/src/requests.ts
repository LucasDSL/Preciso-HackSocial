import { Message } from "venom-bot"
import { Sender } from "venom-bot/dist/api/model/message"
import axios from 'axios'
import { Offer } from "./ChatBot.interfaces"

export async function getCustomerByID(message: Message) {

    const customer = await axios.get('http://localhost:8080/customer/venomID', { 
        params: {
        customerVenomID: message.id
        }
    })

    console.log(customer.data)
    return customer
}

export async function postCustomer(sender: Sender) {
    const body = {
        messageSender: sender
    }
    const response = await axios.post('http://localhost:8080/customer/new', body)

    return response.status
}

export async function postOffer(offer: Offer) {

    const body = {
        customerVenomID: offer.venomID,
        offerLocation: offer.location,
        offerDescription: offer.description,
        isAvailable: offer.isAvailable,
        offerName: offer.name
    }

    const response = await axios.post('http://localhost:8080/offer/new', body)
    return response.status
}
