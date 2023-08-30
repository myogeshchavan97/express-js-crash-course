import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AddTodo from './components/add-todo/AddTodo';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Login from './components/login/Login';
import NotFound from './components/not-found/NotFound';
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
          <Route
            path='/'
            element={
              userInfo ? (
                <Dashboard userInfo={userInfo} />
              ) : (
                <Login setUser={setUser} />
              )
            }
          />
          <Route path='/add-todo' element={<AddTodo userInfo={userInfo} />} />
          <Route
            path='/register'
            element={
              userInfo ? <Navigate to='/' /> : <Register setUser={setUser} />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
