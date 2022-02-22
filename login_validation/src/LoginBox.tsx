import React from "react";
import { PasswordField } from "./PasswordField";
import { SubmitField } from "./SubmitField";
import { UsernameField } from "./UsernameField";

type LoginBoxProps = {
    AccountCredentials: {
        username: string;
        password: string;
    }[];
};

type StateProps = {
    credentials: {
        username: string;
        password: string;
    }[];
    input_username: string;
    input_password: string;
    message: string;
};

export class LoginBox extends React.Component<LoginBoxProps, StateProps> {
    constructor(props: LoginBoxProps) {
        super(props);
        this.state = {
            credentials: props.AccountCredentials,
            input_username: "",
            input_password: "",
            message: "Enter your Credentials and click on submit",
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            input_username: event.target.value,
            message: "Click on Submit button if you finish entering your credentials"
        })
    }

    handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            input_password: event.target.value,
            message: "Click on Submit button if you finish entering your credentials"
        })
    }

    handleClick() {
        let validation_message = "Invalid Credentials";
        this.state.credentials.forEach(credentials => {
            if(this.state.input_username==="" || this.state.input_password==="") {
                validation_message = "Please enter both Username and Password";
            }
            else if(credentials.username===this.state.input_username && credentials.password === this.state.input_password) {
                validation_message = "Valid Credentials";
            }
        });
        this.setState({
            message: validation_message
        });
    }

    render(){
        const username = this.state.input_username;
        const password = this.state.input_password;
        return (
            <div>
                <h2>LOGIN</h2>
                <UsernameField value={username} handleChange={this.handleUsernameChange}/>
                <br></br>
                <PasswordField value={password} handleChange={this.handlePasswordChange}/>
                <br></br>
                <SubmitField handleClick={this.handleClick}/>
                <p><i>{this.state.message}</i></p>
            </div>
        )
    }
}