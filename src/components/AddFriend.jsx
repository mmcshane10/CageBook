import React from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import {Redirect} from 'react-router-dom';

class AddFriend extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
    this._tweet = null;
    this._name = null;
    this._imgURL = null;
    this.handleAddFriendSubmission = this.handleAddFriendSubmission.bind(this);
  }

  handleAddFriendSubmission(event) {
    event.preventDefault();
    this.props.onNewFriendCreation({ name: this._name.value, tweet: this._tweet.value, imgURL: this._imgURL.value, likes: 0, id: v1() });
    this._name.value = '';
    this._tweet.value = '';
    this._imgURL.value = '';
    this.setState({redirect: true});
  }
  render() {
    var formStyle = {
      backgroundColor: '#537ec5'
    };
    var btnStyle = {
      backgroundColor: '#f39422',
      float: 'right',
      marginTop: '10px',
      marginLeft: '3px',
      textDecoration: 'none'
    };
    var inputStyle = {
      paddingLeft: '15px'
    };
    return (

      <div style={formStyle}>
        {this.state.redirect ? <Redirect to='/' /> : ''}
        <form style={inputStyle} onSubmit={this.handleAddFriendSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => { this._name = input; }} />
          <input
            type='text'
            id='tweet'
            placeholder='Quote'
            ref={(input) => { this._tweet = input; }} />
          <input
            type='text'
            id='imgURL'
            placeholder='Image URL'
            ref={(input) => { this._imgURL = input; }} />
          <button className='btn' style={btnStyle}><a target="_blank" href='https://www.google.com/search?q=nicolas+cage&rlz=1C5CHFA_enUS876&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiT-aiw5vTlAhW5JjQIHZ_CDR8Q_AUIEygC&biw=2080&bih=1288'>Find A Photo</a></button>
          <button className='btn' style={btnStyle} type='submit'>Add</button>
        </form>
      </div>
    );
  }
}


AddFriend.propTypes = {
  onNewFriendCreation: PropTypes.func
};

export default AddFriend;