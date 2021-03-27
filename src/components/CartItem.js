import React from 'react';
import styled from 'styled-components';

const CartItem = (props) => {

    let options = []

    for (let i = 1; i < Math.max(props.item.quantity + 1, 20); i++) {
        options.push(<option value={i}> Qty: {i}</option>)
    }

    return (
        <Container>
            <ImageContainer>
                <img src={props.item.image} />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{props.item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemPrice>
                        ${props.item.price}
                    </CartItemPrice>
                    <CartItemQuantityContainer>
                        {<select
                            value={props.item.quantity}
                        >
                            {options}
                        </select>}
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
        </Container>
    )
}

export default CartItem;

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    background: #f7f7f7;
    border-radius: 20px;
    margin: 16px 0;
`

const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img{
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`
const CartItemInfo = styled.div`
    flex-grow: 1;
    padding-left: 20px;
`

const CartItemInfoTop = styled.div`
    color: black;
    h2 {
        font-weight: 600;
        font-size: 18px;
    }
`

const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 95px;
    align-items: center;
`

const CartItemQuantityContainer = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2; 
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);
        :focus {
            outline: none;
        }
    }
`

const CartItemDeleteContainer = styled.button`
    background: #f0c14b;
    border-radius: 12px;
    border: 1px solid;
    margin: 12px;
    padding: 5px 60px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
    font-size: 16px;
`

const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    flex: 1;
`