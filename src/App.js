import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './Components/Header';
import Home from './Components/Home';
import Coins from './Components/Coins';
import CoinsDetails from './Components/CoinsDetails';
import Exchanges from './Components/Exchanges';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/coins"} element={<Coins />} />
          <Route path={"/exchanges"} element={<Exchanges />} />
          <Route path={"/coin/:id"} element={<CoinsDetails />} />
        </Routes></Router>
    </ChakraProvider>
  );
}

export default App;
