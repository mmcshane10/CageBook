import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import AddFriend from './AddFriend';
import Feed from './Feed';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFriendList: []
    };
    this.handleAddingFriendToList = this.handleAddingFriendToList.bind(this);
  }

  handleAddingFriendToList(newFriend) {
    var newMasterFriendsList = this.state.masterFriendsList.slice();
    newMasterFriendsList.push(newFriend);
    this.setState({ masterFriendsList: newMasterFriendsList });
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .flex-container {
            display: flex;
            align-items: stretch;
          }
          .contentContainer {
            margin: 10px;
            text-align: center;
            font-size: 30px;
          }
          .flexLeft {
            flex-grow: 3;
          }
  
          .flexRight {
            flex-grow: 9;
          }
          FriendList {
           width: 100%; 
          }
  
        `}</style>
        <Header />
        <div className='flex-container'>
          <div className='contentContainer flexLeft'>
            <NavBar />
          </div>
          <div className='contentContainer flexRight'>
            <Switch>
              <Route exact path='/' render={() => <Feed feed={this.state.masterFriendList} />} />
              <Route path='/addfriend' render={() => <AddFriend onAddFriendCreation={this.handleAddingFriendToList} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;