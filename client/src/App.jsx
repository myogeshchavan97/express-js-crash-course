import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import useLocalStorage from './custom-hooks/useLocalStorage';
import './index.css';

function App() {
  const [userInfo, setUserInfo] = useLocalStorage('logged_in_user', null);

  const setUser = (user) => {
    setUserInfo(user);
  };

  const logoutUser = () => {
    setUserInfo(null);
  };

  return (
    <BrowserRouter>
      <Header userInfo={userInfo} logoutUser={logoutUser} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/register' element={<Register setUser={setUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
