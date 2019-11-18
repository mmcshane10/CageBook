import React from 'react';
import PropTypes from 'prop-types';

function Friend(props){
  return (
    <div>
      <style jsx>
        {`
          img {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10%;
            border-radius: 5px;
          }
          .card {
            margin-bottom 5px;
            background-color: green;
            margin-left: auto;
            margin-right: auto;
          }
          .card-text {
            color: black;
          }
        `}
      </style>
      <div className='card'>
        <img src={props.imgURL} className='card-img-top' alt='Nic Cage' />
        <div className='card-body'>
          <h5 className='card-title'>{props.name}</h5>
          <p className='card-text'>{props.tweet}</p>
          <a href='#' className='btn btn-primary'>Follow</a>
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