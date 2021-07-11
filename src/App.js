import './App.css';
import Header from './component/Header'
import Navigation from './component/Navigation'
import PASSPORT from './page/PassportPage'
import WALLET from './page/WalletPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './component/Cart'


function App() {
  

  return (
    <div>
      <Router>
        <Header />
        <div>
          <Navigation />
          <Switch>
            <Route path="/passport"><PASSPORT /></Route>
            <Route path="/wallet"><WALLET /></Route>
            <Route path="/"><PASSPORT /></Route>
          </Switch>
        </div>
      </Router>
      <Cart />
    </div>
  );
}

export default App;
