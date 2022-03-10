import './App.css';
import Search from './Components/MainComponents/Body/Search'
import Header from './Components/MainComponents/Header/Header';
import Navbar from './Components/MainComponents/Navbar/Navbar';
import LoginProvider from './Contexts/LoginProvider'
import Login from "./Components/MainComponents/Body/Login"
import {Routes,Route} from 'react-router-dom'
import ProtectedRoutes from './Contexts/ProtectedRoutes';
import'./Assets/CSS/Scrollbar.css'
function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Header />
        <Navbar />
        <div className='body'>
        <Routes>
        <Route exact path="/" element={<Search/>} />
        <Route exact path="/Login" element={<Login/>} />
          <Route element={<ProtectedRoutes />}>
            
          </Route>
        </Routes>
        </div>



      </LoginProvider>
    </div>
  );
}

export default App;
