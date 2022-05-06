import logo from './logo.svg';
import './App.css';

import AuthProvider from './pages/contexts/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

import NotFound from './pages/NotFound/NotFound';
import LogIn from './pages/LogIn/LogIn/LogIn';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import SingleService from './pages/SingleService/SingleService';
import MyBookings from './pages/MyBookings/MyBookings';

import Services from './pages/Services/Services';
import Banner from './pages/Banner/Banner';
import Payment from './pages/Payment/Payment';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Bkash from './pages/Bkash/Bkash';
import Debit from './pages/Debit/Debit';





function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/packages">
              <Services></Services>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/singleservice/:id">
              <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/bkash'>
              <Bkash></Bkash>
            </Route>
            <Route path="/debit">
              <Debit></Debit>
            </Route>



            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>

        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
