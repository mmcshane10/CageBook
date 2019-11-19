import React from 'react';
import PropTypes from 'prop-types';

function Friend(props) {
  var cardStyle = {
    backgroundColor: '#537ec5',
    color: 'black',
    padding: '20px'
  };

  var likesStyle = {
    display: 'flex',
    justifyContent: 'center'
  };


  function AddLikeClicked()
  {
    let searchId = props.id;
    props.onAddingLike(searchId);
  }
  function AddDislikeClicked()
  {
    let searchId = props.id;
    props.onRemovingLike(searchId);
  }

  return (
    <div className="col s12">
      <div style={cardStyle} className="card horizontal">
        <div style={likesStyle} className='card-stacked'>
          <i onClick={AddLikeClicked} className="material-icons">arrow_upward</i>
          <p>{props.likes}</p>
          <i onClick={AddDislikeClicked} className="material-icons">arrow_downward</i>
        </div>
        <div className="card-image">
          <img src={props.imgURL} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h5>{props.name}</h5>
            <p>{props.tweet}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  tweet: PropTypes.string,
  imgURL: PropTypes.string,
  likes: PropTypes.number,
  onAddingLike: PropTypes.func,
  onRemovingLike: PropTypes.func,
  id: PropTypes.string
};

export default Friend;
