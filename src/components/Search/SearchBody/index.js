import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import './style.css';
import logo from './logo.svg'

const  SearchBody = (props)=>{
  return (
    <div className="mainBody">
      <div className='logoDiv'>
        <img className='logoImg' src={logo} />
      </div>
      <div className='searchForm'>
        <SearchForm updateResults={props.updateResults} username={props.username}/>
      </div>
    </div>
  )
}
 export default SearchBody;
