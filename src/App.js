import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { db } from './components/Firebase';

function App() {

  const [ cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((result) => {
      let tempItems = result.docs.map((doc) =>({
        id: doc.id,
        product: doc.data(),
      }))

      setCartItems(tempItems);

    })
  }

  const getPrice = () => {
    cartItems.map((item) => setPrice(price + item.product.price))
  }

  useEffect(() => {
    getCartItems()
  }, [])

  useEffect(() => {
    getPrice()
  }, [])

  return (
    <Router>
      <Container>
        <Header basket={cartItems.length} />
        <Switch>         
          <Route path="/cart">
            <Cart price={price} length={cartItems.length} cartItems={cartItems} />
          </Route>

          <Route path="/search/:title">
            <Search />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`