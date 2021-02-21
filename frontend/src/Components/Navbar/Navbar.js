import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';

class NavBar extends Component {

  state = { clicked: false,
            scrolled: false};

  changeBackground = () => {
    if(window.scrollY >= 80){
      this.setState({ scrolled : true})
    } else {
      this.setState({ scrolled : false})
    }
  }
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
    window.addEventListener('scroll', this.changeBackground);
    return (
      <div className="wrap_nav">
        <nav className={this.state.scrolled ? 'NavbarItems active' : 'NavbarItems'}>
          <a href="/"><h1 className="navbar-logo"><i className="fab fa-react"></i>Jariyo</h1></a>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index} onMouseOut={this.moreView2}>
                  {item.title == '더 보기'
                  ? <a className={item.cName} href={item.url} onMouseOver={this.moreView}>
                      {item.title}
                    </a>
                  : <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  }
                  {item.title == '더 보기' &&
                    <ul className="more" onMouseOver={this.moreView}>
                    {item.more.title.map((a, idx) =>
                      <li className="moreList"><a href={item.more.url[idx]} style={{textDecoration: 'none', color: 'white'}}>{a}</a></li>
                    )}
                    </ul>
                  }
                </li>
              )
            })}
          </ul>
          <Button>Sign Up</Button>
        </nav>
      </div>
    );
  }
}
 
export default NavBar;