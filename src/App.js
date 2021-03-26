import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import Search from './components/Search';
import Info from './components/Info';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>         
          <Route path="/cart">
            <Cart />
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