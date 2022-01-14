import { useEffect, useState } from "react";
import { useParams } from "react-router";
import facade from "../apiFacade";

const Drivers = () => {
  let { id } = useParams();

  const [driver, setDriver] = useState([]);

  useEffect(() => {
    fetch(
      "http://165.232.118.125:8081/startcode/api/driver/getdriversbyrace/" +
        id,
      facade.makeOptions("GET", true)
    )
      .then((response) => response.json())
      .then((data) => {
        setDriver(data);
      });
  },[id]);

  return (
    <div>
      <div>
        {driver &&
          driver.map((driver) => (
            <div>
              <ul>
                <li>
                  Name: {driver.name}, birthyear: {driver.birthyear}, gender: {driver.gender},
                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Drivers;