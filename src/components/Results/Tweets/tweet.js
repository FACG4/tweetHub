import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const  Tweet= (props)=>{
  return (
    <div className="tweet">
    <p>{props.tweet.text}</p>
    {props.tweet.post_image?<div><img src={props.tweet.post_image}/></div>:null}
    </div>
  )
}
 export default Tweet;
