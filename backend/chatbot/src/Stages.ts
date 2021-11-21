import * as venom from 'venom-bot'
import { Offer } from './ChatBot.interfaces'



export function stage0(nextStage: number) {
    nextStage = 1
    const message: string = 'Olá, eu sou o bot do preciso. Se você tem interesse em doar eletrônicos siga as próximas instruções atentamente'
    return message
}


export function stage1(nextStage: number) {
    nextStage = 2
    const message: string = 'Em qual cidade e estado você mora? Responda no formato Cidade-SIGLA, ex: Salvador-BA'
    return message
}


export function stage2(nextStage: number, messageReceived: string) {
    nextStage = 3
    const message: string = `Se sua cidade e estado são: ${messageReceived}, digite: Sim. Para alterar essa informação, digite: Não`
    return message
}


export function stage3(nextStage: number, messageReceived: string) {
    const received = messageReceived.toLowerCase()
    if (received == 'sim') {
        const message: string = 'Digite o nome do eletrônico que você deseja doar.'
        nextStage = 4
        return message
    }

    if (received == 'não' || received == 'nao') {
        const message: string = 'Digite novamente qual cidade e estado você mora. Responda no formato Cidade-SIGLA, ex: Salvador-BA.'
        nextStage = 2
        return message
    }

    const message: string = 'Resposta inválida, tente novamente'
    nextStage = 3
    return message
}


export function stage4(nextStage: number, messageReceived: string) {
    nextStage = 5
    const message: string = `Se o aparelho/componente eletrônico que você deseja doar é : ${messageReceived}, digite: Sim, caso contrário, digite: Não.`
    return message
}


export function stage5(nextStage:number, messageReceived: string) {
    const received = messageReceived.toLowerCase()

    if (received == 'sim') {
        const message: string = "Digite uma pequena descrição do aparelho/componente que você deseja doar, seja breve."
        nextStage = 6
        return message
    }

    if (received == 'não' || received == 'nao') {
        const message: string = "Digite novamente o nome do aparelho/componente que você deseja doar."
        nextStage = 4
        return message
    }

    const message: string = 'Resposta inválida, tente novamente'
    nextStage = 5
    return message
}


export function stage6(nextStage: number, offer: Offer) {
    nextStage = 7
    const message: string = `Para confirmar que está disponível para doar ${offer.name} na cidade de ${offer.location}, digite: Sim, caso queira cancelar, digite: Não`
}


export function stage7(nextStage: number, messageReceived: string) {
    const received = messageReceived.toLowerCase() 
    nextStage = 0

    if (received == 'sim') {
        const message: string = 'Muito obrigado pela doacão! Está tudo confirmado! Em breve alguém que está precisando bastante irá entrar em contato com você!'
        return message
    }

    if (received == 'não' || received == 'nao') {
        const message: string = 'Uma pena que tenha desistido de contribuir :(  Mas estou aqui quando mudar de ideia!!'
        return message
    }

    const message: string = 'Resposta inválida, tente novamente.'
    return message
}

