export const getPriceInReal = (value?: string) => {
    if(value!=undefined){
        const priceInNumber = parseInt(value)
        const priceInReal = priceInNumber/100
        return priceInReal.toFixed(2).toString().replace(".", ",")
    }
    else {
        return console.log("Não existe valor em STRING para conversão em INTEIRO (arrow function getPriceInReal)")
    }
} 