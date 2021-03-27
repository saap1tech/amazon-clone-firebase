import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import Product from './Product';
import {db} from './Firebase';

function Search () {

    const {title} = useParams();
    const [data, setData] = useState([]);
    const [corData, setCorData] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((result) => {
            let tempProducts = result.docs.map((doc) => (
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

    useEffect(()=>{
        setCorData(data.filter(info => info.product.name.includes(title)));
    }, [])

    return (
        <Container>
            {corData[0] ?
            <DataShow> 
                <h2>Result of search for {title}: </h2>
                <SearchCard>
                    {corData.map(item => <Product id={item.product.id} name={item.product.name} image={item.product.image} price={item.product.price}/>)}
                </SearchCard>
            </DataShow>
            : <h2>No result found for {title}</h2>}
        </Container>
    )
}

export default Search;

const Container = styled.div`
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 20px;
    padding-bottom: 0;
`
const SearchCard = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const DataShow = styled.div``