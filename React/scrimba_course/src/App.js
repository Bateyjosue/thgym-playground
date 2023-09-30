import './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='main'>
        <MainComponent/>
      </main>
    </>
  );
}

export default Home;
