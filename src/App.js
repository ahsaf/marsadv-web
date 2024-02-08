import logo from './logo.svg';
import './App.css';
import './styles/master.css';
import HomePage from './pages/home/HomePage';
import AppLayout from './layouts/AppLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from './pages/map/MapPage';

function App() {
  return (
    <div className="App">
      <AppLayout >
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
            </Routes>
            </BrowserRouter>
       
      </AppLayout>
    </div>
  );
}

export default App;
