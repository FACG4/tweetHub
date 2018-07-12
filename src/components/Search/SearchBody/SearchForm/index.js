import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './style.css';

class SearchForm extends Component {
  state = {
    username: '',
    date: moment(),
    error: false,
    waiting:false

  }
  componentDidMount = () => {
    this.setState({
      username: this.props.username
    });
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  dateChange = (date) => {
    this.setState({
      date: date
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username) {

    this.setState({
      waiting: true
    });
    setTimeout(()=>{

    fetch(`http://localhost:3000/api/v1/usertweets/${this.state.username}`, {
        headers: {
          'content-type': 'application/json',
        },
        method: 'GET'
      })
      .then(res => res.json())
      .then(result => {
        if (result.message == 'Not authorized.') {
          this.setState({
            error: 'This account is private',
            waiting:false
          })
        } else if (result.message == "Sorry, that page does not exist.") {
          this.setState({
            error: result.message,
            waiting:false
          })
        } else {
          const date = [].concat(this.state.date.format('D')).concat(this.state.date.format('M')).concat(this.state.date.format('Y')).join(',')
          this.props.updateResults(result, date, this.state.username)

        }

      })

      .catch(error => {
        this.setState({
          error: 'Error, Please try again!'
        })

      })


    },3000)
  }else{
    this.setState({
      error: 'You Should input a username',
      waiting:false
    })

  }

  }

  render() {
    let main;
    if(this.state.waiting){
      return <div className='waiting'><img src='https://cdn.dribbble.com/users/516449/screenshots/3646124/dribbble-twitter.gif' /></div>;
    } else {
      return ( <form onSubmit={this.handleSubmit} className='form'>
    <input type="text" className="inputUserName" placeholder="username" onChange={this.handleChange} value={this.state.username}  />
    <DatePicker className='dateInput' selected={this.state.date} onChange={this.dateChange} dateFormat="ll" />
    <button  type='submit' className="submitButton" value="Submit">Search</button>
    {  (this.state.error)?<div className="error-msg"><i className="fa fa-times-circle"></i>{this.state.error}</div>:null}
    </form>)
  }

  }
}
 export default SearchForm;
