import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thoughtPage from './Routes/ThoughtPage'
import ThoughtListPage from './Routes/ThoughtListPage';
import ThoughtListContextProvider from './Context/ThoughtListContextProvider';
import Header from './components/Header/Header'
import BackToTop from './components/Header/BackToTop';
import Dashboard from './components/Dashboard/Dashboard'




function App() {
  return (
    <div>
    <main className='App'>
      
     

      <BrowserRouter>
      <ThoughtListContextProvider>
      <Switch>
        <Route 
        exact
        path={'/'}
        component={Dashboard}
          />
        <Route 
        exact
        path={'/thoughts'}
        component={ThoughtListPage}
        />
        <Route
        path={'/thoughts/:thoughtsID'}
        component={thoughtPage}
        /> 
      </Switch>
      </ThoughtListContextProvider>
      </BrowserRouter>
      
       
    </main>
    </div>
  );
}

export default App;