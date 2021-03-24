import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Structure from './pages/structure'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/home">
              <div>HOME</div>
            </Route>
            <Route exact path="/">
              <Structure />
            </Route>
            <Route path="/">
              404 PAGE NOT FOUND
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;