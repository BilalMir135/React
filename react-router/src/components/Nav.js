import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const styles = {
    navLink: {
      color: '#fff',
      textDecoration: 'none',
    },
  };

  return (
    <nav>
      <Link to='/' style={styles.navLink}>
        <h3>Logo</h3>
      </Link>

      <ul className='nav-links'>
        <Link to='/about' style={styles.navLink}>
          <li>About</li>
        </Link>
        <Link to='/shop' style={styles.navLink}>
          <li>Shop</li>
        </Link>
        <Link to='/contact' style={styles.navLink}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
