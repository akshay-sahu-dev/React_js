import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import Products from '../../components/Products';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/products" component={Products}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
}



export default App;
