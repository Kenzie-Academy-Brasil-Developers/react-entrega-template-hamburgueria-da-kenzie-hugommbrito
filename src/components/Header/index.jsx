import React from "react";

import logo from "../../assets/BurguerKenzieLogo.png"

import { StyledHeader } from "./style";
import { StyledButton } from "../../styles/Buttons";
import { StyledInput } from "../../styles/Inputs";


console.log(logo)

export const Header = () => {

    return (
        <StyledHeader >
            <div className="container">
                <img 
                    src={logo} 
                    alt="Logo Burguer Kenzie" />
                <StyledInput
                    type="text" 
                    placeholder="Digitar Pesquisa"/>
                <StyledButton >
                    Button Text
                    </StyledButton>
            </div>
        </StyledHeader>
    )
}