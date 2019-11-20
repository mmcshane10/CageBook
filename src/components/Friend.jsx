import React from 'react';
import PropTypes from 'prop-types';

function Friend(props) {
  var cardStyle = {
    backgroundColor: '#537ec5',
    color: 'black',
    padding: '20px',
    marginRight: '6%'
  };

  var likesStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: '10px'
  };

  var iStyle = {
    width: '24px'
  };

  var imgStyle = {
    width: '400px',
    height: '250px'
  };


  function AddLikeClicked() {
    let searchId = props.id;
    props.onAddingLike(searchId);
  }
  function AddDislikeClicked() {
    let searchId = props.id;
    props.onRemovingLike(searchId);
  }

  return (
    <div className="col s12">
      <style jsx>{`
          i:hover{
              cursor: pointer;
              color: #f39422
          }
        `}
      </style>
      <div style={cardStyle} className="card horizontal">
        <div style={likesStyle}>
          <i style={iStyle} onClick={AddLikeClicked} className="material-icons">arrow_upward</i>
          <p>{props.likes}</p>
          <i style={iStyle} onClick={AddDislikeClicked} className="material-icons">arrow_downward</i>
        </div>
        <div className="card-image">
          <img style={imgStyle} src={props.imgURL} />
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
