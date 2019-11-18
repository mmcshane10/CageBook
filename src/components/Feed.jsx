import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';

function Feed(props){
  var feedStyle = {
    backgroundColor: 'white'
  }
  return (
    <div style={feedStyle}>
      {props.feed.map((friend) =>
        <Friend
          name = {friend.name}
          tweet = {friend.tweet}
          imgURL = {friend.imgURL}
          key = {friend.id}
        />
      )}
    </div>
  );
}

Feed.propTypes = {
  feed: PropTypes.array
};

export default Feed;