import React, { Component } from "react";
import styled, { css } from "styled-components";
import "../App.css";
import axios from "axios";
import redirect from "../App";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;



class Login extends Component {
  state ={
    nim : "",
    password : ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = (event) =>{
    event.preventDefault();
    axios({
      method: 'post',
      url: 'https://service.dev.dhirawigata.com/v1/logbook/login',
      data: {
        nim: this.state.nim,
        password: this.state.password
      }
    }).then(res => {
      console.log(typeof res.status);
      if(res.status === 200){
        this.props.history.push("/list");
        
        document.cookie = "isLogin=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        document.cookie = `nim=${this.state.nim}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        console.log(document.cookie.replace(/(?:(?:^|.*;\s*)nim\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
      }
      if(res.status === 401)console.log("eror");
      
    }).catch(res => {
      console.log('gagal');
    });
  }
  
  render() {
    
    return (
      <div>
        <div>Login Log Book</div>
        <form >
          <div>
            <label>Nim</label>
            <input name="nim" type="text" placeholder="Nim" onChange={e => this.onChange(e)} value={this.state.nim}/>
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" placeholder="Password" onChange={e => this.onChange(e)} value={this.state.password}/>
          </div>
          <Button primary label="Submit" onClick={(e) => this.handleClick(e)}>Submit</Button>
          
        </form>
      </div>
    );
  }

}

export default Login;
