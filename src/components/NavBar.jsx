import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  var navStyle = {
    height: '100%',
    position: 'fixed',
    left: '0',
    overflowX: 'hidden',
    backgroundColor: '#537ec5',
    marginLeft: '2%',
    padding: '1%',
    color: '#1b2a49'
  };

  var btnStyle = {
    backgroundColor: '#f39422'
  };

  return (
    <div style={navStyle}>
      <style jsx>{`
            a {
                color: orange;
                text-decoration: none !important
            }
      `}
      </style>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addfriend'>Add Friend</Link></li>
        <li>Messages</li>
      </ul>
      <form>
        <input type='text' placeholder='Whats on your mind?' />
        <button style={btnStyle} className='btn tweet'>Post</button>
      </form>
    </div>
  );
}
 
export default NavBar;