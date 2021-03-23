import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

//adding components
import Nav from "./components/Nav/Nav";

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <div className="App">
      <header>
       <Router>
        <Nav />
        <main>
          <Switch>
           <Route path="/" exact>
           <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/profile" exact>
          <Profile/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
      </header>
      
    </div>
  );
}

export default App;
