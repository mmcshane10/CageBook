import React from 'react';
import PropTypes from 'prop-types';

function Friend(props) {
  var cardStyle = {
    backgroundColor: '#537ec5',
    color: 'black',
    padding: '20px'
  }

  var textStyle = {
    marginLeft: '20px'
  }

  return (
    <div className="col s12">
      <div style={cardStyle} className="card horizontal">
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
  imgURL: PropTypes.string
};

export default Friend;
