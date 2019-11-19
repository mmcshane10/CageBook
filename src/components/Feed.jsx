import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';

function Feed(props){
  return (
    <div className='row'>
      {props.feed.map((friend) =>
        <Friend
          name = {friend.name}
          tweet = {friend.tweet}
          imgURL = {friend.imgURL}
          likes = {friend.likes}
          onAddingLike = {props.onAddingLike}
          onRemovingLike = {props.onRemovingLike}
          id = {friend.id}
          key = {friend.id}
        />
      )}
    </div>
  );
}

Feed.propTypes = {
  feed: PropTypes.array,
  onAddingLike: PropTypes.func,
  onRemovingLike: PropTypes.func
};


export default Feed;