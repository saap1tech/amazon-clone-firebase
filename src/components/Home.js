import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product';
import { db } from './Firebase';

function Home() {

    const [data, setData] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((result) => {
            let tempProducts = [];

            tempProducts = result.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data(),
                }
            ));

            setData(tempProducts);
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <Container>
            <Banner>
                
            </Banner>
            <Content>
                    {data.length >= 3 ? 
                    <>
                     <HomeRow>
                         {data.map((item) => {
                             if (data.indexOf(item) < 2) {
                                return(<Product name={item.product.name} rating={item.product.rating} price={item.product.price} image={item.product.image} />)
                             }
                         })}
                     </HomeRow>
                     <HomeRow>
                        {data.map((item) => {
                             if (data.indexOf(item) >= 2) {
                                return(<Product name={item.product.name} rating={item.product.rating} price={item.product.price} image={item.product.image} />)
                             }
                         })}
                    </HomeRow>   
                    </> 
                    :
                    <HomeRow>
                         {data.map((item) => {
                             if (data.indexOf(item) < 2) {
                                return(<Product id={item.product.id} name={item.product.name} rating={item.product.rating} price={item.product.price} image={item.product.image} />)
                             }
                         })}
                     </HomeRow>
                    }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    position: relative;
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
    margin-top: -350px;
`

const HomeRow = styled.div`
    display: flex;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
`