import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validEmails = ['21b81a1201@cvr.ac.in', '21b81a1202@cvr.ac.in']; // Add valid emails here
  const validCredentials = {
    '21b81a1201@cvr.ac.in': 'password1',
    '21b81a1202@cvr.ac.in': 'password2',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validEmails.includes(email)) {
      setError('Invalid email address');
      return;
    }
    if (validCredentials[email] !== password) {
      setError('Incorrect password');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          fullWidth 
          margin="normal" 
          required
        />
        <TextField 
          id="outlined-basic" 
          label="Password" 
          variant="outlined" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          fullWidth 
          margin="normal" 
          required
        />
        {error && <p className="error">{error}</p>}
        <Button type="submit" variant="contained" fullWidth>
          SIGN-IN
        </Button>
      </form>
    </div>
  );
};

export default Login;
