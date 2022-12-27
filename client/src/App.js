import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom'
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import ErrorPage from './components/Errorpage';
import UserCreate from './components/UserCreate';
import UserDetails from './components/UserDetails';
import UserEdit from './components/UserEdit';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Login/>}/>
      <Route element={<ErrorPage/>}/>
      
    <Route path='/about/user/create' element={<UserCreate/>}/>
    <Route path='/about/user/detail/:userid' element={<UserDetails/>}/>
    <Route path='/about/user/edit/:userid' element={<UserEdit/>}/>
    </Routes>

  
    </>
  );
}

export default App;
