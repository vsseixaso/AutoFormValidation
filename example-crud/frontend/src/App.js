import { Route, Switch } from 'react-router-dom';

import { AddEmployee } from './components/employee/Add';
import { EditEmployee } from './components/employee/Edit';
import { Home } from './components/Home';
import { GlobalProvider } from './context/GlobalState';

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