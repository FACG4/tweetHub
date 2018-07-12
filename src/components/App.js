import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Search from './Search'
import Results from './Results'

const getUserInfo=(result,callback)=>{
  const profileImage=result[0].profile_banner_url
  const avatarImage=result[0].profile_image_url
  const description=result[0].description
  const name=result[0].name

  callback({profileImage,avatarImage,description,name})
}

const filter= (result,date,callback)=>{
const filteredArray =result.filter(tweet=>{
  const day = (new Date(Date.parse(tweet.created_at))).getDate();
  const month = ((new Date(Date.parse(tweet.created_at))).getMonth())+1;
  const year = (new Date(Date.parse(tweet.created_at))).getFullYear();
  const fullDate =[].concat(day).concat(month).concat(year).join(",");
  return date===fullDate
})
  callback(filteredArray)
}
class App extends Component {
  state={
    searchView:true,
    username:''
  }

   changeView=()=>{
    const  newValue=!this.state.searchView
    this.setState({searchView:newValue})

  }
  updateResults=(result,date,username)=>{
    getUserInfo(result,({profileImage,avatarImage,description,name})=>{
    this.setState({profileImage,avatarImage,username,date:date.split(',').join(' /'),description,name})
    })



  filter(result,date,(filteredArray)=>{
    this.setState({tweets:filteredArray})
})
    this.changeView()
  }
  render() {
    const data=this.state
    const userInfo={profileImage:data.profileImage,avatarImage:data.avatarImage,username:data.username,name:data.name,description:data.description,date:data.date}
    return (
      <div className="App">
      {(data.searchView)?<Search username={data.username} updateResults={this.updateResults}/> :<Results userInfo={userInfo} tweets={data.tweets} changeView={this.changeView}/>}
      </div>
    );
  }
}

export default App;
