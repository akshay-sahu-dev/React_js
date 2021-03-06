// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
// import Button from '../../Button';
import Posts from '../Posts';
import Post from '../Post';

function App() {
  return (
    <>
    <BrowserRouter>

      <h1>App</h1>
      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
