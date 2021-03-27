import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart(props) {
    return (
        <Container>
            <CartItems cartItems={props.cartItems} />
            <CartTotal price={props.price} length={props.length} />
        </Container>
    )
}

export default Cart;

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px;
`