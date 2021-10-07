import Scheduler from "./components//Scheduler";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact path="/"
            component={Scheduler}
          />
         <Route
            path="/schedule/:id"
            component={Schedule}
          />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
