import React from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import { Link } from 'react-router-dom';

function AddFriend(props) {
  let _name = null;
  let _tweet = null;
  let _imgURL = null;

  function handleAddFriendSubmission(event) {
    console.log(_name.value);
    console.log(_tweet.value);
    console.log(_imgURL.value);
    event.preventDefault();
    props.onNewFriendCreation({name: _name.value, tweet: _tweet.value, imgURL: _imgURL.value, id: v1()});
    _name.value = '';
    _tweet.value = '';
    _imgURL.value = '';
  }
  
  var formStyle = {
      backgroundColor: '#537ec5'
  }

  var btnStyle = {
    backgroundColor: '#f39422',
    float: 'right',
    marginTop: '10px',
    marginLeft: '3px',
    textDecoration: 'none'
  }

  var inputStyle = {
      paddingLeft: '15px'
  }

  return (
    <div style={formStyle}>
      <form style={inputStyle} onSubmit={handleAddFriendSubmission}>
        <input 
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='tweet'
          placeholder='Quote'
          ref={(input) => {_tweet = input;}}/>
        <input
          type='text'
          id='imgURL'
          placeholder='Image URL'
          ref={(input) => {_imgURL = input;}}/>
          <button className='btn' style={btnStyle}><a target="_blank" href='https://www.google.com/search?q=nicolas+cage&rlz=1C5CHFA_enUS876&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiT-aiw5vTlAhW5JjQIHZ_CDR8Q_AUIEygC&biw=2080&bih=1288'>Upload Photo</a></button>
          <button className='btn' style={btnStyle} type='submit'>Add</button>
      </form>
    </div>
  );
}

AddFriend.propTypes = {
  onNewFriendCreation: PropTypes.func
};

export default AddFriend;