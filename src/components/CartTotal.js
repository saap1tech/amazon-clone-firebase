import React from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
import CurrencyFormat from 'react-currency-format';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const CartTotal = (props) => {

    const createOrder = (data, actions) =>{
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: 2996,
              },
            },
          ],
        });
      };
    
      const onApprove = (data, actions) => {
        return actions.order.capture();
      };

    return (
        <Container>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({props.length} items):  <strong>{` ${value}`}</strong>
                        </p>
                    </>
                )}
                decimaleScale={2}
                value={2996}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </Container>
    )
}

export default CartTotal;

const Container = styled.div`
    height: 200px;
    flex: 0.2;
    padding: 20px;
    background-color: #ffff99;
    margin: 120px 0;
    border-radius: 20px;
`
