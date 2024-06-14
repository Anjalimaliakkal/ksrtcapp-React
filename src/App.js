import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus.jsx';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<SignIn/>}/>
     <Route path='/SignUp' element={<SignUp/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/AddBus' element={<AddBus/>}/>
     <Route path='/search' element={<SearchBus/>}/>
     <Route path='/ViewAll' element={<ViewAll/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
