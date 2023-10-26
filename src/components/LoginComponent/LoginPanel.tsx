import LoginPanelInterface from "../interface/LoginPanel.interface";
import { authenticateUser, registerUser } from "../../utils/LocalSaver";
import { AiOutlineUser, AiOutlineKey } from 'react-icons/ai';
import { TbEggs } from 'react-icons/tb';
import { useState } from "react";
import '../../assets/css/login.css';

const LoginPanel = (prop: LoginPanelInterface) => {
    const [localUsername, setLocalUsername] = useState('');
    const [localKey, setLocalKey] = useState('');
    const [authenticated, setAuthenticated] = useState('');

    const login = function() {
        const response = authenticateUser(localUsername, localKey);

        if (response.valid) {
            setTimeout(() => {
                prop.setUsername(localUsername);
                prop.setKey(localKey);    
            }, 500);
        }

        setAuthenticated(response.message);
        setLocalUsername('');
        setLocalKey('');
    }

    const register = function() {
        if (registerUser(localUsername, localKey))
            return setAuthenticated('New User Registered!');
        setAuthenticated('Cannnot Register Username');
    }

    return (
        <div className="login-container">
            <header><h2><TbEggs/> Welcome to TaskerTask</h2></header>
            <br />
            <AiOutlineUser className="icon"/>
            <input type="text" placeholder="username" value={localUsername} onChange={(evt) => {
                setLocalUsername(evt.target.value);
            }}/>
            <br /><br />
            <AiOutlineKey className="icon"/>
            <input type="password" placeholder="task key" value={localKey} onChange={(evt) => {
                setLocalKey(evt.target.value);
            }}/>
            <br /><br />{authenticated}<br /><br />
            <button className="login" onClick={login}>View My Task</button>
            <button className="register" onClick={register}>Register User</button>
            <br /><br />
        </div>
    );
}

export default LoginPanel;