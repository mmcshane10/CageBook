import React from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import { Redirect } from 'react-router-dom';

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _tweet: null,
      _name: null,
      _imgURL: null,
      toHome: false
    };
    this.handleAddFriendSubmission = this.handleAddFriendSubmission.bind(this);
  }

  handleAddFriendSubmission(event) {
    console.log(this.state._name.value);
    event.preventDefault();
    this.props.onNewFriendCreation({ name: this.state._name.value, tweet: this.state._tweet.value, imgURL: this.state._imgURL.value, likes: 0, id: v1() });
    this.state._name.value = '';
    this.state._tweet.value = '';
    this.state._imgURL.value = '';
    this.setState({ toHome: true });
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

    // if (this.state.toHome === true) {
    //   return <Redirect to='/' />;
    // }

    return (
      <div style={formStyle}>
        {this.state.toHome ? <Redirect to='/' /> : ""}
        <form style={inputStyle} onSubmit={this.handleAddFriendSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => { this.state._name = input; }} />
          <input
            type='text'
            id='tweet'
            placeholder='Quote'
            ref={(input) => { this.state._tweet = input; }} />
          <input
            type='text'
            id='imgURL'
            placeholder='Image URL'
            ref={(input) => { this.state._imgURL = input; }} />
          <button className='btn' style={btnStyle}><a target="_blank" href='https://www.google.com/search?q=nicolas+cage&rlz=1C5CHFA_enUS876&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiT-aiw5vTlAhW5JjQIHZ_CDR8Q_AUIEygC&biw=2080&bih=1288'>Upload Photo</a></button>
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