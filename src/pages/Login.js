import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
    console.log(response);
}
const componentClicked = (data) => {
    console.log(data);
}
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            nameError: '',
            passwordError: ''
        }
    }
    valid() {
        if (!this.state.name.includes("@") && this.state.password.length < 5) {
            this.setState({
                nameError: "Invalid Username",
                passwordError: "Password length shoul be more than 5 character"
            })
        }

        else if (!this.state.name.includes("@")) {
            this.setState({ nameError: "Invalid Username" })
        }

        else if (this.state.password.length < 5) {
            this.setState({
                passwordError: "Password length shoul be more than 5 character"
            })

        } else {
            return true;
        }
    }


    submit() {
        this.setState({
            nameError: "",
            passwordError: ""
        })
        if (this.valid()) {
            alert("Form has been submited");
        }
    }


    render() {
        return (
            <Div className="login">
                <form>

                    <input type="text"
                        placeholder="Username"
                        onChange={(event) => { this.setState({ name: event.target.value }) }}
                    />
                    <p style={{ color: "red" }}>
                        {this.state.nameError}
                    </p>

                    <input type="password"
                        placeholder="Password"
                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                    />
                    <p style={{ color: "green" }}>
                        {this.state.passwordError}
                    </p>
                    <button onClick={() => { this.submit() }}>
                        Log In
                    </button>
                    <FacebookLogin
                    appId="358079788568813"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />
                </form>
                
            
            </Div>
        );
    }
}



const Div = styled.div`
    width:100%;
    height:100vh;
   background:#eee;
   padding-top:20px;

form{
    align-items:center;
    justify-content:center;
    width:400px;
    margin-left:auto;
    margin-right:auto;
    border:2px solid red;
    

   
}
input[type=text], input[type=password] {
    margin:10px 13px;
    padding: 10px 20px;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width:90%;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 31px;
    border: none;
    cursor: pointer;
    width:80%;

   
  }
  
  button:hover {
    opacity: 0.8;
  }
`
