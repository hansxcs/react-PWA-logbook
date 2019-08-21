import React, { Component } from "react";
// import styled, { css } from "styled-components";
import "../App.css";
import axios from "axios";

import {Button,Form,Input,Icon } from 'antd';

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;

//   ${props =>
//     props.primary &&
//     css`
//       background: palevioletred;
//       color: white;
//     `};
// `;

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

    this.props.form.validateFields((err, values) => {
      if (!err) {
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
          }
          if(res.status === 401)console.log("eror");
          
        }).catch(res => {
          console.log('gagal');
        });
      }
    });
  }
  
  render() {
    
    const { getFieldDecorator } = this.props.form;

    const loginFormStyle = {
      display:'flex',
      justifyContent: 'center',
      position:'relative',
      transformOrigin:'center',
      transform:'translateY(50%)'
    };

    const formStyle ={
      background: 'linear-gradient(41deg, rgba(50,65,173,1) 0%, rgba(0,212,255,1) 100%)',
      padding:'30px 15%',
      borderRadius:'6px'
    }

    const header = {
      color:'white',
      fontSize:'24px',
      margin: '10px 0'
    };

    return (
      <div style={loginFormStyle}>
        <Form style={formStyle} onSubmit={(e) => this.handleClick(e)}>
          
        <div style={header}>DUAR!!! Log Book</div>
          <Form.Item>
            {getFieldDecorator('nim', {
              rules: [{ required: true, message: 'Please input your nim!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Nim" 
                name="nim"
                onChange={e => this.onChange(e)} value={this.state.nim}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                name="password"
                placeholder="Password" 
                onChange={e => this.onChange(e)} value={this.state.password}
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;
