import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Main from '../src/components/Kadrlar/Main'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import EditForm from './components/EditForm';
import Modal from './components/Modal';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/modal/:id" element={<Modal/>}/>
          <Route path="/form" element={<RegistrationForm/>}/>
          <Route path="/edit/:id" element={<EditForm/>}/>
          <Route path='/info' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
