import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './style.css';

class SearchForm extends Component {
    state = {
      username: '',
       date: moment(),
       error:false

  }

  handleChange=(event)=> {
    this.setState(
      {username:event.target.value}
    );
    console.log(this.state);
    }

  dateChange=(date) =>{
    this.setState(
  {date: date}
  );
  }

  handleSubmit=(event) =>{
    event.preventDefault();
     const headers = {
	    headers: {
	        'content-type': 'application/json',
	    },
       method: 'GET'

 	};

    fetch(`https://tweetshub.herokuapp.com/api/v1/usertweets/${this.state.username}`,headers)
     .then(res=>res.json())
     .then(result=>{
       if(result.error){
         this.setState({error:'This account is private'})
       }else if(result.errors&&result.errors[0].message){
         this.setState({error:result.errors[0].message})
       }else{
         const date =[].concat(this.state.date.format('D')).concat(this.state.date.format('M')).concat(this.state.date.format('Y')).join(',')
         this.props.changeView(result,date)

       }

     })

    .catch(error=>{
      this.setState({error:'error in getting data ,please try again!!!'})

    })
   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" className="inputUserName" placeholder="username" onChange={this.handleChange} />
      <DatePicker selected={this.state.date} onChange={this.dateChange} dateFormat="ll" />
      <button  type='submit' className="submitButton" value="Submit">Search</button>
    {  (this.state.error)?<h4>{this.state.error}</h4>:null}
      </form>

    );
  }
}
 export default SearchForm;
