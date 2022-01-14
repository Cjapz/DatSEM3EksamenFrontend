import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componet/Header";
import Home from "./componet/Home";
import AddBook from "./componet/AddBook";
import NoMatch from "./componet/NoMatch";
import FindBook from "./componet/FindBook";
import LogIn from "./componet/login/LogIn";
import facade from "./apiFacade";
import LoggedIn from "./componet/login/LoggedIn";
import Owners from "./componet/Owners";
import Details from "./componet/details";
import CreateBoat from "./CreateBoat";
import Races from "./componet/Races";
import Drivers from "./componet/Drivers";
import Cars from "./componet/Cars";
import CreateRace from "./CreateRace";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/races">
          <Races Cars={props.Cars} Drivers={props.Drivers} />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/owners">
          <Owners />
        </Route>
        <Route path="/create-race">
          <CreateRace />
        </Route>
        <Route path="/login">
          <div>
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
              <div>
                <LoggedIn facade={facade} />
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
