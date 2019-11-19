import React from 'react';


function Header() {

  var divStyle = {
    backgroundColor: '#1b2a49',
  };
  var headStyle = {
    fontFamily: 'Trade Winds, cursive',
    textAlign: 'center',
    fontSize: '100px',
    color: '#c9d1d3',
    textShadow: '-1px 0 #f39422, 0 1px #f39422, 1px 0 #f39422, 0 -1px #f39422'
  };
  return (
    <div style={divStyle}>
      <h1 style={headStyle}>CageBook</h1>
    </div>
  );
}

export default Header;