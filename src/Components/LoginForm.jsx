import React, { useState } from 'react'
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "7f1e2f07-abeb-4efc-977d-63150bf3e685", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError('oops! incorrect username/password')
        }
    }


    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='password' required />
                    <div align="center">
                        <button type='submit' className='button'><span>Start Chatting</span></button>

                    </div> 
                    <h3 className="error">{error}</h3>
                    </form>
            </div>

        </div>
    )
}

export default LoginForm
