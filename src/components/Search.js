import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import Product from './Product';
import axios from './axios';

function Search () {

    const {title} = useParams();
    const [data, setData] = useState([]);
    const [corData, setCorData] = useState([]);

    const searchData = () => {
        axios.get('get_all/')
          .then(res=> {
              setData(res.data);
            })
          .catch(err=>console.log(err))
    }

    useEffect(()=>{
        searchData()
    }, [title])

    useEffect(()=>{
        setCorData(data.filter(info => info['title'].includes(title)));
    }, [data])

    return (
        <Container>
            {corData[0] ?
            <DataShow> 
                <h2>Result of search for {title}: </h2>
                <SearchCard>
                    {corData.map(item => <Product id={item.id} title={item.name} image={`http://127.0.0.1:8000${item.image}`} price={item.price}/>)}
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