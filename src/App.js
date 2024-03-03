//import logo from './logo.svg';
import './App.css';
import { Routing } from './Component/Routing';
import {Provider} from 'react-redux'
import { Store } from './Component/Store/Store';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
         <Routing/>
      </Provider>
    </div>
  );
}

export default App;
