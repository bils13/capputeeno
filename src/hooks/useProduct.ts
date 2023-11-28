import { useEffect } from 'react'
import axios from "axios";

export const query = `    
        query{
            allProducts {
                id
                name
                price_in_cents
                image_url
                category
                sales
            }
        }`

export function useProduct() {
    const data: any = axios({
        method: 'post',
        url: "http://localhost:3333/",
            data: { query },
        }).then((response: any) => {
            console.log(response.data)
    })

    return data
}

