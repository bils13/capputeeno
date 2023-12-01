export const getPriceInReal = (value: string) => {
    const priceInNumber = parseInt(value)
    const priceInReal = priceInNumber/100
    return priceInReal.toFixed(2).toString().replace(".", ",")
} 