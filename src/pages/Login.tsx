import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLogin((login) => ({
      ...login,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit() {
    localStorage.setItem('username', login.username);
    navigate('/');
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-orange-200 to-orange-400">
      <div className="flex flex-col gap-4 items-center w-64">
        <h1 className="text-xl font-bold text-black">Login</h1>
        <Input
          name={'username'}
          type={'text'}
          placeholder={'Username'}
          onChange={handleInputChange}
        />
        <Input
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          onChange={handleInputChange}
        />
        <div className="flex gap-2 text-sm w-full justify-between items-center">
          <div className="w-48">
            <Button
              label="Login"
              click={handleSubmit}
              style={{ bg: 'bg-orange-500' }}
            />
          </div>
          <div className="w-48">
            <a className="font-bold" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
