import { useState } from "react";
import { ArrowIcon } from "../arrow-icon";
import { Menu, Options, Organize } from "./org-by-pref.style";
import { useStore } from "@/hooks/useStore";

const menu = [{'id': 'news', 'option': 'Novidades'},
              {'id': 'biggest_price', 'option': 'Preço: Maior - Menor'},
              {'id': 'minor_price', 'option': 'Preço: Menor - Maior'},
              {'id': 'sales', 'option': 'Mais vendidos'}]

export function OrganizeByPref(){
    const [disable, setDisable] = useState(false)
    const handleClick = () => {
        disable === false ? setDisable(true) : setDisable(false) 
    }
    const { handleSetPopularity } = useStore()
    return(
        <>
        <Organize onClick={handleClick}>
            <p>Organizar por </p>
            <ArrowIcon />
            <Menu disable={disable}>
                {
                    menu.map((data) => (
                        <Options
                            key={data.id}
                            onClick={() => handleSetPopularity(data.id)}
                        >
                            {data.option}
                        </Options>
                    ))
                }
            </Menu>
        </Organize>
        </>
    )
}