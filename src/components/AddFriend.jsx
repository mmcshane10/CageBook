import React from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';

function AddFriend() {
  let _name = null;
  let _tweet = null;
  let _imgURL = null;

  function handleAddFriendSubmission(event) {
    event.preventDefault();
    props.onNewFriendCreation({name: _name.value, tweet: _tweet.value, imgURL: _imgURL.value, id: v1()});
    _name.value = '';
    _tweet.value = '';
    _imgURL.value = '';
  }

  return (
    <div>
      <form onSubmit={handleAddFriendSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Friend Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='tweet'
          placeholder='Friend Tweet'
          ref={(input) => {_tweet = input;}}/>
        <input
          type='text'
          id='imgURL'
          placeholder='Friend Photo'
          ref={(input) => {_imgURL = input;}}/>
      </form>
    </div>
  );
}

AddFriend.propTypes = {
  onNewFriendCreation: PropTypes.func
};

export default AddFriend;