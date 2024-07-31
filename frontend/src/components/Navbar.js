import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import '../styles/Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <NavigationMenu.Root className="NavigationRoot">
      <NavigationMenu.List className="NavigationList">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link to="/" className="NavigationLink">Home</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        {token ? (
          <>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link to="/dashboard" className="NavigationLink">Dashboard</Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>


            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link onClick={logout} className="NavigationLink">Logout</Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </>
        ) : (
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link to="/login" className="NavigationLink">Login</Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Navbar;