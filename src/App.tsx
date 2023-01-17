import React from 'react';

import GlobalStyle from './global'
import Login from "./Pages/Login/index"
import Home from './Pages/Home/index';
import ContextProviders from './contextProviders';

function App() {
  return (
    <ContextProviders>
      <Home></Home>
    
      <GlobalStyle/>
    </ContextProviders>
     
  );
}

export default App;
