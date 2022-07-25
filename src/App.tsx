import { BrowserRouter } from 'react-router-dom';

/* Components */
import Header from './components/Header';
import Navbar from './components/Navbar';
import Routing from './components/Routing';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <main className="m-3 d-flex flex-column align-items-center">
        <Routing />
      </main>
    </BrowserRouter>
  );
};

export default App;
