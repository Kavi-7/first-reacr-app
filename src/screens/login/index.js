import React from "react";
import { Input,Button } from "../../components";
import {TextHeader} from "../../components/TextHeader";

export const LoginScreen = (props) => {
    const [state,setState] = React.useState({email:'', password:''});
    const updateEmail = (email) => setState({...state,email});
    const updatePassword = (password) => setState({...state,password});
    const onSubmit = () => alert("Welcome");
    return <div>
    <TextHeader title="My Company" subTitle="Login" />
    <Input
        id={"email"}
        value={state.email}
        onChange={updateEmail}
        placeholder="Enter mail"
        type="text"
    />
    <Input
        id={"password"}
        value={state.password}
        onChange={updatePassword}
        placeholder="Enter Password"
        type="password"
    />
    <Button id={"login_btn"} btnName="Login" onClick={onSubmit} />
    </div>
}