import logo from "./logo.svg";
import "./App.css";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      {/** NAVIGATION LOGIC */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Project Book</Navbar.Brand>
      </Navbar>

      <Switch>
        <Route path="/page1">
          <Page1 />
        </Route>

        <Route path="/page2">
          <Page2 />
        </Route>

        <Route path="/page3">
          <Page3 />
        </Route>

        <Route path="/">
          <Page1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
