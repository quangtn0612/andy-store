import './App.css';
import Header from './component/Header'
import Navigation from './component/Navigation'
import PASSPORT from './page/PassportCover'
import WALLET from './page/Wallet'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './component/Cart'
import { DataContext, DataProvider } from './context/DataContext'

function App() {
  return (
    <DataProvider>
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
    </DataProvider>
  );
}

export default App;
