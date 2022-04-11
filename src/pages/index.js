import React from 'react';
import { Route ,Switch } from 'react-router-dom';
import Content from '../components/Content';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
           <Hero/>
           <Switch>
               <Route path="" exact component={Home}/>
           </Switch>
          <Content/> 
        </>
    );
};

export default Home;