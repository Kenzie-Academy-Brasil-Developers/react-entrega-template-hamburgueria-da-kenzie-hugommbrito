import React from "react";

import { StyledButton } from "../../styles/Buttons";
import { StyledCartCotnainer, StyledCartTop, StyledCartCard, StyledCartTotal } from "./style";

export const Cart = ({ cartList, cartTotal, setCartList, setCartTotal }) => {
    const removeFromCart = (id) => {
        const listWithoutClickedItem = cartList.filter(item => item.id !== +id)
        setCartList(listWithoutClickedItem)

    }

    return (
        <StyledCartCotnainer>
            <StyledCartTop >
                <h3>Carrinho de Comporas</h3>
            </StyledCartTop>
            {
                cartList.map(product => {
                    return (
                        <StyledCartCard key={product.id}>
                            <div>
                                <img src={product.img} alt="" />
                                <div>
                                    <h4>{product.name}</h4>
                                    <p>{product.category}</p>
                                </div>
                            </div>
                            <p id={product.id} onClick={(e) => removeFromCart(e.target.id)}>Remover</p>
                        </StyledCartCard>
                    )
                })
            }
            <StyledCartTotal >
                <div>
                    <h2>Total</h2>
                    <h3>{(cartTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    }
                    ))}
                </h3>
                </div>
                <StyledButton grey big onClick={() => {setCartList([]); setCartTotal(0)}}>Remover Todos</StyledButton>
            </StyledCartTotal>
        </StyledCartCotnainer>
    )
    
}
//CART TOP
//CART CARDS
//CART TOTAL