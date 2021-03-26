import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product';
import axios from './axios';

function Home() {

    const [data, setData] = useState([]);

    const get_all = () => {
        axios.get('get_all/')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        get_all()
    }, [data])

    return (
        <Container>
            <Banner>
                
            </Banner>
            <Content>
                {data.map(item => <Product title={item.title} rating={item.rating} price={item.price} image={`http://127.0.0.1:8000${item.image}`} />)}
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
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
    display: flex;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    padding: 40px 10px;
    padding-bottom: 0;
`