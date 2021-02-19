import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Navbar/Navbar';
import Body from './Body/Body'
import NavBar from './Navbar/Navbar';
import ReservationHeader from './ReservationView/ReservationHeader';
import SignIn from './Navbar/Sign/SingIn'
import SignUp from './Navbar/Sign/SignUp'

export default() => (
    <Router>
        <NavBar/>
        <Route exact path="/" component={Body}></Route>
        <Route path="/reservation/:product/:place" component={ReservationHeader}></Route>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
    </Router>
)