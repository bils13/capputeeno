import { useState } from "react";
import { ArrowIcon } from "../arrow-icon";
import { Menu, Options, Organize } from "./org-by-pref.style";


export function OrganizeByPref(){
    const [disable, setDisable] = useState(false)
    const handleClick = () => {
        disable === false ? setDisable(true) : setDisable(false) 
    }
    return(
        <>
        <Organize onClick={handleClick}>
            <p>Organizar por </p>
            <ArrowIcon />
            <Menu disable={disable}>
               <Options>Novidades</Options> 
               <Options>Preço: Maior - Menor</Options> 
               <Options>Preço: Menor - Maior</Options> 
               <Options>Mais vendidos</Options> 
            </Menu>
        </Organize>
        </>
    )
}