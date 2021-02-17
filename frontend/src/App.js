import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import ReservationHeader from './Components/ReservationView/ReservationHeader';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path="/reservation/:product/:place" component={ReservationHeader}></Route>
      </Router>
    </div>
  );
}

export default App;
