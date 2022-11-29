import React from "react"

import { StyledCard } from "./style"
import { StyledButton } from "../../styles/Buttons";


export const Card = ({ key, info, addToCart }) => {
    

    
      return (
        <StyledCard >
            <img src={info.img} alt={info.name} />
            <div className="cardInfo">
                <h2>{info.name}</h2>
                <h3>{info.category}</h3>
                <h4>{(info.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }
                ))}</h4>
                <StyledButton onClick={() => addToCart(info)}>Adicionar</StyledButton>
            </div>
        </StyledCard>
    )
}