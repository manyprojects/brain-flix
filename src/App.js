import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from './pages/UploadPage/UploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
import './App.scss';

// https://project-2-api.herokuapp.com
//  ?api_key=<your_api_key_here>
// "api_key": "d1dcf106-f026-4b35-b5ae-cd2588af71c3"
// {
//   "api_key": "966263aa-7639-4571-a879-005ec98839e3"
// }
//  https://project-2-api.herokuapp.com?api_key=d1dcf106-f026-4b35-b5ae-cd2588af71c3

function App() {
  return (
    // <main className="App">
    //   <Header />
    //   <Hero />
    // </main>
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
