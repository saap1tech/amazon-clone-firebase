import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import Search from './components/Search';
import Info from './components/Info';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { db } from './components/Firebase';

function App() {

  const [ cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((result) => {
      let tempItems = result.docs.map((doc) =>({
        id: doc.id,
        product: doc.data(),
      }))

      setCartItems(tempItems);

    })
  }

  useEffect(() => {
    getCartItems()
  }, [])

  return (
    <Router>
      <Container>
        <Header />
        <Switch>         
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>

          <Route path="/search/:title">
            <Search />
          </Route>

          <Route path="/info/:id">
            <Info />
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