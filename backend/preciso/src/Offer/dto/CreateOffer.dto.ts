export class CreateOfferDto {
    readonly isAvailable: boolean
    readonly location: string
    readonly description?: string
    readonly offerName: string
    readonly customerVenomID: string
}