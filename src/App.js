import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Notes from './Notes';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='notes' element={<Notes/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
