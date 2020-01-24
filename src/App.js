import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      signedIn: false,
      showDetails: false,
      authInfo: [{username:'testaccount', password:'test@1234'}],
      wrongAuthInfo: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.name)
    if(this.state.username === this.state.authInfo[0].username && this.state.password === this.state.authInfo[0].password){
      this.setState({signedIn: true})
    }else {
      this.setState({wrongAuthInfo: true})
    }
  }

  handleChange(e) {
    this.state.wrongAuthInfo ?
    this.setState({[e.target.name]: e.target.value, wrongAuthInfo: false})
    :
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
  return (
    <div className="App">
    {this.state.signedIn == false ? 
      <header  className="App-header">
      <h3> Login App 1.0 </h3>
      <form onSubmit={this.onFormSubmit}>
      <h5> <p className="form-label-username">username <input onChange={this.handleChange} name="username" placeholder="username" type="text"/> </p></h5>
      <h5> <p className="form-label-password">password <input onChange={this.handleChange} name="password" placeholder="password" type="password" className="input" margin='10px'/> </p></h5>
      <div>{this.state.wrongAuthInfo ? <p className="error-message">Wrong username or password provided</p> : ''}</div>

      <button type="submit" className="form-submit-button">Submit</button>
      {this.state.showDetails !== true ? 
      <button onClick={()=> this.setState({showDetails: true})}>Show Auth Details</button>:

     <div>
       <h5> username: {this.state.authInfo[0].username} </h5>
       <h5> password: {this.state.authInfo[0].password} </h5>
      <button onClick={()=> this.setState({showDetails: false})} >Hide Details</button>
     </div>
      }

      </form>

    </header> 
    
    :
    
    <div>
      <header  className="App-header">
      <h5 className="welcome-messge">Welcome! Feel free to leave </h5> <button onClick={() => this.setState({signedIn:false})}>Leave</button>
      </header>
    </div>
      
     }
    </div>
  );
}
}

export default App;
