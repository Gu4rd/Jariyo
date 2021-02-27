import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Navbar/Navbar';
import Body from './Body/Body'
import NavBar from './Navbar/Navbar';
import ReservationHeader from './ReservationView/ReservationHeader';
import More from './More/More';
import Footer from './Footer/Footer'
import ReservationListHeader from './ReservationList/ReservationListHeader';
import ReservationPage from './ReservationPage/ReservationPage';

export default() => (
    <Router>
        <NavBar/>
        <Route exact path="/" component={Body}></Route>
        <Route path="/reservation/:product_type/:product_location" component={ReservationHeader}></Route>
        <Route path="/mylist" component={ReservationListHeader}></Route>
        <Route path="/itempage/:id/:title/:detailed_location" component={ReservationPage}></Route>
        <Route path="/more" component={More}></Route>
        <Footer/>
    </Router>
)