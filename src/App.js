import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignIn from './components/pages/SignIn';
import CustomThemeProvider from './CustomThemeProvider';
import store from './redux-state/store';
import { Provider } from 'react-redux';
import UserRegistrationPage from './components/pages/UserRegistrationPage';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route
              path='/user-registration'
              element={<UserRegistrationPage />}
            />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
