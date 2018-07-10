import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import Search from './Search'
import Results from './Results'

const filter= (result,date)=>{
const marwa =result.filter(tweet=>{
  const day = (new Date(Date.parse(result[0].created_at))).getDate();
  const month = (new Date(Date.parse(result[0].created_at))).getMonth();
  const year = (new Date(Date.parse(result[0].created_at))).getFullYear();
  // console.log(typeof year,'monthhhhhhhhhhh');
  const fullDate =[].concat(day).concat(month).concat(year).join(",");
  // console.log(fullDate,'fffffffffffffffffffff');
  return date===fullDate
})
console.log(marwa,'jjjjjjjjjjjjj');
}
class App extends Component {
  state={
    searshView:true
  }
  changeView=(result,date)=>{
filter(result,date)
// console.log(date,'lllllllllll');
  const  newValue=!this.state.searshView
    this.setState({searshView:newValue})
  }
  render() {
    return (
      <div className="App">
      {(this.state.searshView)?<Search changeView={this.changeView}/> :<Results />}


      </div>
    );
  }
}

export default App;
