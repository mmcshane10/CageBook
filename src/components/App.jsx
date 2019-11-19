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
    this.handleAddingLike = this.handleAddingLike.bind(this);
    this.handleRemovingLike = this.handleRemovingLike.bind(this);

  }

  handleAddingFriendToList(newFriend) {
    var newMasterFriendList = this.state.masterFriendList.slice();
    newMasterFriendList.push(newFriend);
    this.setState({ masterFriendList: newMasterFriendList });
  }

  handleAddingLike(searchId){
    var newMasterFriendList = this.state.masterFriendList.slice();
    for(let i =0; i < newMasterFriendList.length; i++)
    {
      if(newMasterFriendList[i].id == searchId)
      {
        newMasterFriendList[i].likes++;
      }
    }
    this.setState({masterFriendList: newMasterFriendList});    
  }

  handleRemovingLike(searchId){
    var newMasterFriendList = this.state.masterFriendList.slice();
    for(let i =0; i < newMasterFriendList.length; i++)
    {
      if(newMasterFriendList[i].id == searchId)
      {
        newMasterFriendList[i].likes--;
      }
    }
    this.setState({masterFriendList: newMasterFriendList});
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className='row'>
          <div className='col s3'>
            <NavBar />
          </div>
          <div className='col s9'>
            <Switch>
              <Route exact path='/' render={() => <Feed feed={this.state.masterFriendList} onAddingLike={this.handleAddingLike} onRemovingLike={this.handleRemovingLike} />} />
              <Route path='/addfriend' render={() => <AddFriend onNewFriendCreation={this.handleAddingFriendToList} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;