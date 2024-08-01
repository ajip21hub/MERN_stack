import React, { useContext, useState } from 'react';
import { Box, TextField, Button } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const  { login } = useContext(AuthContext);



    const handleSubmit = async (e) => {
        e.preventDefault();


        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({email, password})
        });

        const  data = await response.json();
        // alert(data);
        // console.log(data);
        if(response.status === 200){
            login(data.token, data.email);
            navigate('/dashboard');

        }else { 
            alert(data.message);
        }
    };

    return (
        <Box p="4" style={{ maxWidth: '300px', margin: 'auto' }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <TextField.Root
          
            type="email"
              placeholder=" Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              >
          </TextField.Root>
      
          <TextField.Root     
            type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}>
     
          </TextField.Root>
          <Button     mt="3" type="submit">Login</Button>
        </form>
      </Box>
    );
      
    
}

export default Login;