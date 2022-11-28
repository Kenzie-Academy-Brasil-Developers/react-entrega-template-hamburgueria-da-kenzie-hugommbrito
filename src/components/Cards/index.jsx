import React from "react"

import { StyledCard } from "./style"
import { StyledButton } from "../../styles/Buttons";


export const Card = ({ info, setCartList, currentCardList, setCartTotal }) => {
    
    const addProductoToCart = (product) => {     
        const newCartList = [...currentCardList, product]
        setCartList(newCartList)
        console.log(currentCardList)
    
        setCartTotal(currentCardList.reduce((acc, curr) => acc + curr.price, 0))
    }
    
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
                <StyledButton onClick={() => addProductoToCart(info)}>Adicionar</StyledButton>
            </div>
        </StyledCard>
    )
}