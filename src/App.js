import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from './pages/UploadPage/UploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
import './App.scss';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:videoId" element={<VideoDetailsPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
