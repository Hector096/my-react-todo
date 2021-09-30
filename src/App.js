import Scheduler from "./components//Scheduler";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={() => {
              return (
                <>
                  <Scheduler />
                  <Footer />
                </>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
