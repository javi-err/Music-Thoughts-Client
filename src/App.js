import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thoughtPage from './Routes/ThoughtPage'
import ThoughtListPage from './Routes/ThoughtListPage';
import ThoughtListContextProvider from './Context/ThoughtListContextProvider';
import Header from './components/Header/Header'
import BackToTop from './components/Header/BackToTop';



function App() {
  return (
    <div>
    <main className='App'>
      < Header/> 
     

      <BrowserRouter>
      <ThoughtListContextProvider>
      <Switch>
        <Route 
        exact
        path={'/'}
        component={ThoughtListPage}
        />
        <Route
        path={'/thoughts/thoughtsID'}
        component={thoughtPage}
        /> 
      </Switch>
      </ThoughtListContextProvider>
      </BrowserRouter>
      
       <BackToTop/>
    </main>
    </div>
  );
}

export default App;