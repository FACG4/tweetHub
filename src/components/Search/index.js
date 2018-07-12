import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './style.css' ;
import SearchBody from './SearchBody';


class Search extends Component{
  render(){
    return (
      <div>
      <Header />
      <SearchBody updateResults={this.props.updateResults} username={this.props.username}/>
      </div>
    )
  }

}

export default Search;
