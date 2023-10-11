import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';

function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <>
      <header>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main className='main'>
        <MainComponent/>
      </main>
    </>
  );
}

export default Home;
