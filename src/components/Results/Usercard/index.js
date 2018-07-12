import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const  UserCard= (props)=>{
  return (
    <div className="UserCard">
      <div className='profileDiv'>
        <img src={props.userInfo.profileImage} alt="" className="profileImg"/>
        <div className='avatarDiv'>
          <img src={props.userInfo.avatarImage} alt="" className='avatarImg'/>
        </div>
      </div>

      <div className='userNameDiv'>

        <a href={"https://twitter.com/" + props.userInfo.username} target="_blank">
          <h3>{props.userInfo.name}</h3>
          <p>@{props.userInfo.username}</p>

        </a>
      </div >

      <div className='dateDiv'>Published in <i> {props.userInfo.date}</i></div>

    </div>
  )
}
 export default UserCard;
