import React , { Component }from 'react';
import ReactDOM from 'react-dom'
import UserCard from './Usercard'
import Tweets from './Tweets'
import './style.css'
import searchLogo from './search.svg'
class Results extends Component {
  render(){

  return(
    <div className='parentDiv'>
    <UserCard userInfo={this.props.userInfo} />
    <Tweets tweets={this.props.tweets}/>
    <button onClick={this.props.changeView} className="searchButton"><img src={searchLogo} /></button>
    </div>
  )
}
}
export default Results;
