import React from 'react';

class NewFriendControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forVisibleOnPage: false
    };
  }

  render(){
    return (
      <h1 onClick={this.handleClick}>Add Friend</h1>
    );
  }

}

export default NewFriendControl;