import { Route, Switch } from 'react-router';
import Header from './components/Header';
import CartFeature from './features/Cart';
import Hanime from './features/Hanime.tv';
import Hentaiz from './features/Hentaiz.net';
import ProductsFeatures from './features/Products';
import DetailPage from './features/Products/pages/DetailPage';

function App() {
  
  return (
    <div className="App">
      <Header/>

      <Switch>
          <Route path="/hanime" exact>
              <Hanime />
          </Route>

          <Route path='/hentaiz' exact>
            <Hentaiz />
          </Route>
          <Route path='/products' exact>
            <ProductsFeatures />
          </Route>
          <Route path='/products/:productID' exact>
            <DetailPage />
          </Route>
          <Route path='/cart' exact>
            <CartFeature />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
