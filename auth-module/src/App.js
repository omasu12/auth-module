import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Hanime from './features/Hanime.tv';
import Hentaiz from './features/Hentaiz.net';

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
      </Switch>
    </div>
  );
}

export default App;
