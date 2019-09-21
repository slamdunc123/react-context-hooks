import React, { Component, createContext } from 'react';

export const ThemeContext = createContext(); //set variable to be a context

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee'
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555'
    }
  };

  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme
    });
  };
  render() {
    // console.log(this.state);
    return (
      // provide the children components within the specific context with a value in this case the state
      // use the provider method of the declared specific context ie ThemeContext
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;
