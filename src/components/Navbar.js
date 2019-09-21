import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  // static contextType = ThemeContext; // declare variable to consume the specific context
  render() {
    // console.log(this.context);

    // using the consumer approach is allowed in functional components too
    // you can also use multiple contexts within one component
    // static approach only works in class components and only one context is allowed

    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
