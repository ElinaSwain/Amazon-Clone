import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import {auth} from "./firebase";

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password).then(auth =>{
            history.push("/");
        }).catch(error => alert(error.message))
    }

    const register = event =>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            //it successfully created a user with with email and password.
            console.log(auth);
            if(auth) {
                history.push("/");
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img  className="login__logo" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012015/amazon-logo-rgb.png?itok=FZJ5-sKg" alt="" /> 
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={ event => setEmail(event.target.value)}></input>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}></input>
                    <button type="submit" className="login__signinButton" onClick={signIn}>Sign in</button>
                </form>
                <p>By continuing, you agree to AMAZON CLONE conditions of Use and Privacy Notice.</p>
                <button type="submit" className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
