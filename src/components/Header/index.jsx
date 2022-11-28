 import React from "react";

import logo from "../../assets/BurguerKenzieLogo.png"

import { StyledHeader } from "./style";
import { StyledButton } from "../../styles/Buttons";
import { StyledInput } from "../../styles/Inputs";

export const Header = ({ filter }) => {

    return (
        <StyledHeader >
            <div className="container">
                <img 
                    src={logo} 
                    alt="Logo Burguer Kenzie" />
                <StyledInput
                    type="text" 
                    placeholder="Digitar Pesquisa"
                    onChange={(e) => filter(e.target.value)}/>
                <StyledButton >
                    Button Text
                    </StyledButton>
            </div>
        </StyledHeader>
    )
}