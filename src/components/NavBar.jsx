import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <style jsx>{`
        div {
          height: 40px;
        }
        .btn {
          background-color: white;
          border: solid thin gray;
          border-radius: 0%;
        }
        li {
          float: left;
        }
        li:hover {
          cursor: pointer;
        }
        input {
          float: right;
          border-radius: 20px;
          border: solid 2px blue;
          height: 40px;
          width: 250px;
          margin-right: 20px;
        }
        .tweet {
          float: right;
          margin-right: 20px;
          border-radius: 20px;
          border: solid 2px blue;
        }
        
      `}</style>
      <ul>
        <li className="btn">Home</li>
        <li className="btn"><Link to= '/addfriend'>Add Friend</Link></li>
        <li className="btn">Messages</li>
      </ul>
      <form>
        <button className='btn tweet'>Post</button>
        <input type="text" placeholder="What's on your mind?"/>
      </form>
    </div>
  );
}

export default NavBar;