import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  static contextType = ThemeContext  
  render() {
        return (
          <AuthContext.Consumer>{(authContext) => (
              <ThemeContext.Consumer>{(themeContext) => {
                const { isAuthenticated, toggleAuth } = authContext;
                const { isLightTheme, light, dark } = context; 
                const theme = isLightTheme ? light : dark; 
              return (
                <nav style={{ background : theme.ui }}>
                <h1>Context App</h1>
                <div onClick={toggleAuth}>
                { isAuthenticated ?  'Logged in ': 'Logged out'    }
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
              </nav>
              );
            }}</ThemeContext.Consumer>
          )} < /AuthContext.Consumer>
          
        );
    }
}

export default Navbar;