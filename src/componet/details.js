import { useEffect, useState } from "react";
import { useParams } from "react-router";
import facade from "../apiFacade";

const Details = () => {
  let { name } = useParams();

  const [car, setCar] = useState([]);

  useEffect(() => {
    fetch(
      "http://165.232.118.125:8081/startcode/api/car/getcarbyrace/" +
        name,
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
      });
  },[name]);

  return (
    <div>
      <div>
        {car &&
          car.map((car) => (
            <div>
              <ul>
                <li>
                  ID: {car.id} <br /> 
                  Brand: {car.brand},
                  Make: {car.make},
                  Year: {car.year},
                  Name: {car.name}, 
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Details;
