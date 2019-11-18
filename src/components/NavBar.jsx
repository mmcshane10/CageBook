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
  }

  var btnStyle = {
    backgroundColor: '#f39422'
  }

  return (
    <div style={navStyle}>
      <ul>
        <li className=""><Link to='/'>Home</Link></li>
        <li className=""><Link to='/addfriend'>Add Friend</Link></li>
        <li className="">Messages</li>
      </ul>
      <form>
        <input type="text" placeholder="What's on your mind?" />
        <button style={btnStyle} className='btn tweet'>Post</button>
      </form>
    </div>
  );
}

export default NavBar;