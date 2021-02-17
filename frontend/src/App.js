import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import ReservationView from './Components/ReservationView/ReservationView';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path="/reservation/:product/:place" component={ReservationView}></Route>
      </Router>
    </div>
  );
}

export default App;
