// styles
import { ResetStyles } from "./components/GlobalStyles"

// components
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import Spinner from './components/Spinner';
import ProductsPage from './pages/products/ProductsPage';

// contextos
import Provider from "./contexts";

function App() {

  return (
    <>
      <ResetStyles />
      <Provider>
        <Spinner />
        
        <div className="page-container">
          <Message />
          <Header />
          <ProductsPage />
        </div>
              
        <Footer />
      </Provider>
    </>
  );
}

export default App;
