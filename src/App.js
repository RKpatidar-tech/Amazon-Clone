import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from "styled-components";
import Address from "./Components/Address";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import SignUp from "./Components/SignUp";
import AddProduct from "./Components/AddProduct";
import Orders from "./Components/Orders";

import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js"; 
//import './App.css';

const promise = loadStripe(
  'pk_test_51MmwrPSD00GWPsqelk3GSP0EXkinYUisEQeU4C4ZKiN2XieFKw7eEW8cQDOcSYY98KSWHbEA7le0FamlSMkOOoX700rjOlmqNk'
)
function App() {
  
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" 
          element={<Home  />}
        /> 
        
          <Route path="/login" element={<Login/>}/> 
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </Container>
    </Router>
    
  );
}

const Container = styled.div`
width: 100vw;
`;
export default App;
