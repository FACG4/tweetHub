import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './tweet';
import './style.css';

const  Tweets= (props)=>{

  return (
    props.tweets.length>0 ?(<div className="tweets">
    {props.tweets.map((tweet,index)=><Tweet key={index} tweet={tweet} />)}
    </div>):<h1 className='sorryMsg' >Sorry this user has no tweets at this date </h1>
  )
}
 export default Tweets;
