import { useState } from "react";
import facade from "./apiFacade";

const CreateRace = () => {
  const raceInfo = { name: "", date: "", time: "", location: "", };
  const [race, setRace] = useState(raceInfo);

  const createRace = (evt) => {
    evt.preventDefault();
    fetch(
        "http://165.232.118.125:8081/startcode/api/race/createrace" ,
        facade.makeOptions("POST", true,race)
      )
        .then((response) => response.json())
        
  };

  const onChange = (evt) => {
    setRace({
      ...race,
      [evt.target.id]: evt.target.value,
    });
  };

  return <div>
<h2>Create Race</h2>
<form onChange={onChange}>
<input placeholder="name" id="name"/>
<input placeholder="date" id="date"/>
<input placeholder="time" id="time"/>
<input placeholder="location" id="location"/>
<button onClick={createRace}>create race</button>



</form>


  </div>;
};

export default CreateRace;