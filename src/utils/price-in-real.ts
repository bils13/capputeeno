export const getPriceInReal = (value?: any) => {
    if(value){
        let priceInNumber: number
        typeof(value) === 'string' ? priceInNumber = parseInt(value) : priceInNumber = value
        const priceInReal = priceInNumber/100
        return priceInReal.toFixed(2).toString().replace(".", ",")
    }
} 