import { Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;