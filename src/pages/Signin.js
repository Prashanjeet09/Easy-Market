import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default class Signin extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            password: '',
        }
    }

    submit() {
        
        console.log(this.state);
        let url = " https://ecommerce-test-website.azurewebsites.net/register";
        let data = this.state;
        fetch(url, {
            method: "POST",
            // "Content-Type":"application/json",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log('resp', resp);
                alert("data has been submited sucessfully");
            })
        })
    }

    render() {
        return (
            <Div>
                <h2>Sign Up</h2>
                <h4>Please enter your details.</h4>
                <div className="form-group">
                    <input type="text"
                        name="firstaname"
                        placeholder="Enter Your First Name"
                        value={this.state.firstName}
                        onChange={(data) => { this.setState({ firstName: data.target.value }) }} />

                    <input type="text"
                        name="laststaname"
                        placeholder="Enter Your Last Name"
                        value={this.state.lastName}
                        onChange={(data) => { this.setState({ lastName: data.target.value }) }} />

                    <input type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={this.state.email}
                        onChange={(data) => { this.setState({ email: data.target.value }) }} />

                    <input type="email"
                        name="confirmEmail"
                        placeholder="Enter Confirm Email"
                        value={this.state.confirmEmail}
                        onChange={(data) => { this.setState({ confirmEmail: data.target.value }) }} />

                    <input type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        value={this.state.password}
                        onChange={(data) => { this.setState({ password: data.target.value }) }} />

                    <button className="submit"  onClick={() => { this.submit() }}>Submit</button>
                    <button>
                    <Link to="/login" className="login">Login</Link>
                </button>
                </div>
               
              

            </Div>
        );
    }
}


const Div = styled.div`
width:100%;
height:100vh;
background:#eee;
padding-top:2rem;

h2,h4{
    padding: 0px 10px;
    text-align:center;
    align-items:center;
    justify-content:center;
}
.form-group{
    width:400px;
  margin-left:auto;
  margin-right:auto;
}

input{
  width: 90%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; 
}






button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 10px 0;
    border: none;
    cursor: pointer;
    width: 90%;
  }
  
  button:hover {
    opacity: 0.8;
  }
  button a{
    color:white;
}

`