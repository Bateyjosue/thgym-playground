import './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';

function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <MainComponent/>
      </main>
    </>
  );
}

export default Home;
