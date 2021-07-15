// styles
import { ResetStyles } from "./components/GlobalStyles"

// components
import Message from './components/Message';
import Spinner from './components/Spinner';

import Routes from "./Routes"

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
          
          <Routes />
        </div>
              
      </Provider>
    </>
  );
}

export default App;
