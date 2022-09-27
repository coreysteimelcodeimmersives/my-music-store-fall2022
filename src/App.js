import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignIn from './components/pages/SignIn';
import CustomThemeProvider from './CustomThemeProvider';
import { sampleUserData } from './mockData';

function App() {
  const [user, setUser] = useState({ ...sampleUserData });
  const [signIn, setSignIn] = useState(false);
  const [shoppingCart, setShoppingCart] = useState({
    products: {},
    items: 0,
  });

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/sign-in'
            element={
              <SignIn
                user={user}
                setUser={setUser}
                signIn={signIn}
                setSignIn={setSignIn}
                shoppingCart={shoppingCart}
              />
            }
          />
          <Route
            path='/home'
            element={
              <HomePage
                user={user}
                signIn={signIn}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
          <Route
            path='/cart'
            element={
              <CartPage
                user={user}
                signIn={signIn}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
