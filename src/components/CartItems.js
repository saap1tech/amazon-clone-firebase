import React from 'react'
import styled from 'styled-components';
import CartItem from './CartItem';

const CartItems = (props) => {
    return (
        <Container>
            <Title>Your Cart</Title>
            <ItemsContainer>
                {
                    props.cartItems.map((item)=>(
                        <CartItem 
                            id={item.id}
                            item={item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems;

const Container = styled.div`
    flex: 0.8;
    padding: 20px;
    margin: 20px;
`

const Title = styled.h2`
    margin-bottom: 8px;
`
const ItemsContainer = styled.div`
`