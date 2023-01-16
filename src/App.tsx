import React from 'react';

import GlobalStyle from './global'
import Login from "./Pages/Login/index"
import Home from './Pages/Home/index';
import { TaskListContextProvider } from './Contexts/taskListContext';

function App() {
  return (
    <TaskListContextProvider>
      <Home></Home>
    
      <GlobalStyle/>
    </TaskListContextProvider>
  );
}

export default App;
