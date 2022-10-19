import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignIn from './components/pages/SignIn';
import CustomThemeProvider from './CustomThemeProvider';
import store from './redux-state/store';
import UserRegistrationPage from './components/pages/UserRegistrationPage';
import CreateProductsPage from './components/pages/CreateProductsPage';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/register-user' element={<UserRegistrationPage />} />
            <Route path='/create-product' element={<CreateProductsPage />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
