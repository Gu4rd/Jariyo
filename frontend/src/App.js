import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import ReservationView from './Components/Reservation/ReservationView';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path="/product" component={ReservationView}></Route>
      </Router>
    </div>
  );
}

export default App;
