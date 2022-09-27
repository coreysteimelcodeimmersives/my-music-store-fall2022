import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignIn from './components/pages/SignIn';
import ShoppingCartContextProvider from './context/ShoppingCartContext';
import UserContextProvider from './context/UserContext';
import CustomThemeProvider from './CustomThemeProvider';

function App() {
  return (
    <CustomThemeProvider>
      <UserContextProvider>
        <ShoppingCartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </ShoppingCartContextProvider>
      </UserContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
