export class CreateOfferDto {
    isAvailable: boolean
    location: string
    description?: string
    offerName?: string
    customerVenomID: string
}