 
import Navbar from './components/Navbar/Navbar.jsx';
import Headline from './components/Headline/Headline.jsx';
import WhatsNew from './components/WhatsNew/WhatsNew.jsx';

function App() {
  return(
    <>
      <main>
        <Navbar />
        <section className='main-content'>
          <Headline />
          <WhatsNew />
        </section>
      </main>
    </>
  );
}

export default App