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
      <SearchBody changeView={this.props.changeView}/>
      </div>
    )
  }

}

export default Search;
