import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';

class NavBar extends Component {

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked : !this.state.clicked})
  }

  moreView() {
    document.getElementsByClassName("more")[0].style.display = 'block';
  }
  moreView2() {
    document.getElementsByClassName("more")[0].style.display = 'none';
  }

  render() {
    return (
      <nav className="NavbarItems">
        <a href="/"><h1 className="navbar-logo"><i className="fab fa-react"></i>Jariyo</h1></a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {item.title == '더 보기'
                ? <Link to={item.url} className={item.cName} id="moreView">
                    {item.title}
                    <div className="more">
                      {item.more.title.map((write, idx) =>
                        <Link to={item.more.url[idx]} key={idx} className="moreList" style={{textDecoration: 'none'}}><span>{write}</span></Link>
                      )}
                    </div>
                  </Link>
                : <Link to={item.url} className={item.cName}>{item.title}</Link>
                }
              </li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}
 
export default NavBar;