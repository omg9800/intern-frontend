import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router";
import Login from "./components/login";
import Meetings from "./components/meetings";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/meetings" exact>
          <Meetings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
