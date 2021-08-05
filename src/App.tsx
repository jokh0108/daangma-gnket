import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import MePage from './pages/MePage';
import MyNearbyPage from './pages/MyNearbyPage';
import TownLifePage from './pages/TownLifePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/town-life">
          <TownLifePage />
        </Route>
        <Route path="/my-nearby">
          <MyNearbyPage />
        </Route>
        <Route path="/chat">
          <ChatPage />
        </Route>
        <Route path="/me">
          <MePage />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
