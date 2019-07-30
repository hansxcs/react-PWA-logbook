import React , { Component } from 'react';
// import {  Link } from 'react-router-dom';
import styled ,{ css } from 'styled-components'

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

`

const axios = require('axios');

axios({
    method:'get',
    url:'http://bit.ly/2mTM3nY',
    responseType:'stream'
}).then(function (response){
    console.log(response);
});

class Header extends Component{
    render(){
        return (
            <div>
                <div>Login Log Book</div>
                <form>
                    <div>
                        <label>Nim</label>
                        <input type="text" placeholder="Nim" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" placeholder="Password" />
                    </div>
                    <Button primary>Submit</Button>
                </form>
                
                
            </div>
        );
    }

    
}

export default Header;