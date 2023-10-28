import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

// https://project-2-api.herokuapp.com
//  ?api_key=<your_api_key_here>
// "api_key": "d1dcf106-f026-4b35-b5ae-cd2588af71c3"
//  https://project-2-api.herokuapp.com?api_key=d1dcf106-f026-4b35-b5ae-cd2588af71c3

function App() {
  return (
    <main className="App">
      <Header />
      <Hero />
    </main>
  );
}

export default App;
