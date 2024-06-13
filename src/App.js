import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<SignIn/>}/>
     <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
