import React from 'react';

import GlobalStyle from './global'
import ContextProviders from './contextProviders';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import CategoriePage from './Pages/Categorie';


function App() {
  return (
    <ContextProviders>
      <BrowserRouter>
        <Routes>
			    <Route path="/" element={<Home/>} />
	        <Route path="/login" element={<Login/>} />
          <Route path='/categorie/:name' element = {<CategoriePage/>}></Route>
		    </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </ContextProviders>
     
  );
}

export default App;
