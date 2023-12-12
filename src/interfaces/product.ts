export interface ProductProps{
    id: string,
    category: string,
    image_url: string,
    name: string,
    price_in_cents: string,
    sales?: number,
    description?: string,
}

export interface ProductInCart extends ProductProps{
    quantity: number,
}