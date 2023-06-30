import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
