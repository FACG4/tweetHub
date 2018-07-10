import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const  UserCard= ()=>{
  return (
    <div className="UserCard">
      <div className='profileDiv'>
        <img src="" alt="" className="profileImg"/>
        <div className='avatarDiv'>
          <img src="" alt="" className='avatarImg'/>
        </div>
      </div>

      <div className='userNameDiv'>
        <h3>User name</h3>
      </div>
    </div>
  )
}
 export default UserCard;
