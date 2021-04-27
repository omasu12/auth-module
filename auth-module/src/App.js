import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Hanime from './features/Hanime.tv';
import Hentaiz from './features/Hentaiz.net';
import ProductsFeatures from './features/Products';

function App() {
  
  return (
    <div className="App">
      <Header/>

      <Switch>
          <Route path="/hanime">
              <Hanime />
          </Route>

          <Route path='/hentaiz'>
            <Hentaiz />
          </Route>
          <Route path='/products'>
            <ProductsFeatures />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
