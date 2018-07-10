import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import './style.css';

const  SearchBody = (props)=>{
  return (
    <div className="mainBody">
      <div className='logoDiv'>
        <img className='logoImg' src="https://www.freelogodesign.org/Content/img/slide-logo-3.png" />
        <SearchForm changeView={props.changeView} />
      </div>
    </div>
  )
}
 export default SearchBody;
