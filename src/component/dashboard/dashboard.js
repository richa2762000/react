import React, { Component } from 'react';
import Traffic from '../Traffic/traffic';
import Data from '../data/data';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Box from '../box/box';
import './dashboard.css'
import User from '../user/user';
class Dashboard extends Component {

   render() {
      return (
         <>
            <div className='dash'>
               <div className='nav'>
                  <Navbar></Navbar>
               </div>
               <div className='comp'>
                  <div className='name'>
                     <User></User>
                  </div>
                  <div className='head'>
                     <Header></Header>
                  </div>
                  <div className='box'>
                     <Data></Data>
                     <Box></Box>
                  </div>
                  <div className='traf'>
                     <Traffic></Traffic>
                     <Traffic></Traffic>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
export default Dashboard;
