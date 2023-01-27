import React, {useState, useContext} from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import { Link } from "react-router-dom";
import AuthContext, {AuthType} from "../../Contexts/authContext";


const Login: React.FC = ()=>{
    const {setUserData} = useContext(AuthContext) as AuthType;
    const [email, setEmail] =  useState("");

    function handleLogin(){
        localStorage.setItem('@Project:email', email);
        setUserData({email})


    }

    

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    return(    
        <S.Page>
            <S.LeftSide>
                <S.Img src={Logo}></S.Img>
            </S.LeftSide>
            <S.RightSide>
                <S.Title>Welcome to Tasker</S.Title>
                <S.Subtitle>Please, insert your informations to access your tasks.</S.Subtitle>
                <S.FieldName >Email</S.FieldName>
                <S.InputField value={email} id="email" onChange={handleEmail} placeholder="Insert your email"></S.InputField>
                <S.FieldName>Password</S.FieldName>
                <S.InputField placeholder="Insert your password" type="password"></S.InputField>
                <S.KeepSigned><S.Checkbox/><S.Subtitle>Remember me</S.Subtitle></S.KeepSigned>
                <Link to="/">
                    <S.SignIn onClick={handleLogin}>Sign In</S.SignIn>
                </Link>
                <S.Subtitle>Don't have an account? <a>Sign Up</a></S.Subtitle>
            </S.RightSide>
        </S.Page>
    )
};

export default Login;