import { Link, Switch, Route } from "react-router-dom";
import Drivers from "./Drivers";
import Cars from "./Cars";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";
import facade from "../apiFacade";



const Races = () => {
  const [race, setRace] = useState([]);

  useEffect(() => {
    fetch(
      "http://165.232.118.125:8081/startcode/api/race/all",
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => {
        setRace(data);
      });
  },[]);

  return (
    <div>
      <h1>Kommende Ræs</h1>
      <ul>
        {race &&
          race.map((race) => (
          <li>
                'Name: {race.name}, Location: {race.location}, Date: {race.date}, Time {race.time}, 
                <Link to={`/races/${race.name}`}>Cars</Link>{" "} 
                <Link to={`/races/${race.id}`}>Drivers</Link>{" "}
                </li>
          ))}
        </ul>
      <hr />

      <Switch>
        <Route path={"/races/:name"}>
          <Cars/>
        </Route>
        <Route> path={"/races/:id"}
          <Drivers/>  
        </Route>
      </Switch>
    </div>
  );
}

export default Races;