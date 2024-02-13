import logo from './logo.svg';
import './App.css';
import './styles/master.css';
import HomePage from './pages/home/HomePage';
import AppLayout from './layouts/AppLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from './pages/map/MapPage';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const stripePromise = loadStripe('pk_test_51OgOnBKwTyoiG7Mw5lBCrk1RcGJNj93qgK4kseZ80z9b03Xpye6ldhw1kGzxUIYF8QIsVMra1RnAODw0Ts0SORk400x7jmulRe');

function App() {
  
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: 'asdasdsadsa',
  // };
  
  return (
    // <Elements stripe={stripePromise} options={options}>
      <div className="App">
        {window.innerWidth > 650?
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/map" element={<MapPage />} />
            </Routes>
        </BrowserRouter>:
        <div>
          <p>Please Open in your PC</p>
        </div>
        }
        <ToastContainer />
          
        
      </div>
    // </Elements>
  );
}

export default App;
