import './App.css'
import CurrentPage from './pages/CurrentPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/current" element={<CurrentPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />                         
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
