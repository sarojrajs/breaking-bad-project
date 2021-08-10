import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import CharacterDetail from './pages/CharacterDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/:id'>
            <CharacterDetail/>
          </Route>
          <Route path='/' exact>
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
