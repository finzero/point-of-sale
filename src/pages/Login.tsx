import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import bgImage from '../assets/wave.svg';

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit() {
    login({ username: form.username });
    navigate('/');
  }

  return (
    <div className="h-screen bg-gradient-to-b from-white to-orange-400">
      <div
        className="absolute left-0 bottom-0 w-screen overflow-hidden leading-none h-[123px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <form
        action=""
        className="w-screen h-screen flex items-center justify-center"
      >
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
      </form>
    </div>
  );
};

export default Login;
