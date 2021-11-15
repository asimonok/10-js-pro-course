import React  from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

interface Props {
    //children: React.ReactNode;
  }

const Header = (props: Props) => {
        //const { children } = props;
      
        return (
          <header className="app__header">
            <nav className="app__menu">
            <ul>
            <li>
              <NavLink
                to="/posts"
                activeStyle={{'color': '#9f0013'}} 
                exact>
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                activeStyle={{'color': '#9f0013'}} 
                >
                Users
              </NavLink>
            </li>
          </ul>
            </nav>
        </header>
            // <div className="header">{children}</div>
        )
}

export default Header;