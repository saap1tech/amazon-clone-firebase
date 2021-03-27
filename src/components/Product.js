import React from 'react'
import styled from 'styled-components'
import {db} from './Firebase';

function Product(props) {

    const addToCart = () => {
        const cartItem = db.collection('cartItems').doc(props.id);
        console.log(props.id);
        cartItem.get()
        .then((doc) =>{
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection('cartItems').doc(props.id).set({
                    image: props.image,
                    name: props.name,
                    price: props.price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            <Title>
                {props.name}
            </Title>
            <Price>
                ${props.price}
            </Price>
            <Rating>
                {Array(props.rating)
                .fill()
                .map((i) => (
                <p>🌟</p>
                ))}
            </Rating>
            <Image src={props.image} />
            <ActionSection>
                <ProductButton>
                    More info
                </ProductButton>
                <ProductButton onClick={addToCart}>
                    Add to Cart
                </ProductButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-height: 400px;
    background: linear-gradient(45deg, orange, red);
    box-shadow: 2px 2px 2px gray;
    border-radius: 30px;
    margin: 10px;
    padding: 20px;
    z-index: 1;
    align-items: center;
`
const Title = styled.span`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
`
const Price = styled.span`
    margin-top: 5px;
    margin: 0 auto;
    text-align: center;
`
const Rating = styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 200px;
    width: 100%;
    object-fit: contain; 
    margin-bottom: 15px;
`

const ActionSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ProductButton = styled.button`
    background: #f0c14b;
    border-radius: 12px;
    border: 1px solid;
    margin: 2px;
    padding: 5px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
`