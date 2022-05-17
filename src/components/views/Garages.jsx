import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Garages() {
  const [garagesList, setGaragesList] = useState([]);
  
  const getGarages = () => {
    Axios.get("https://tiger-park.herokuapp.com/garages").then((response) => {
      setGaragesList(response.data);
    })
  }
  getGarages();
  return (
    <>
    <div className="garages">
      <h1>View Garage Details</h1>
      <table>
        <thead>
            <tr>
              <td>Garage name</td>
              <td>Address</td>
              <td># of levels</td>
              <td># of handicap spots</td>
              <td># of compact spots</td>
              <td># of electric charging spots</td>
              <td># of standard spots</td>
              <td>Total # of spots</td>
            </tr>
          </thead>
          {garagesList.map((val, key) => {
            return <tbody>
              <td key={val.g_id}>{val.g_name}</td>
              <td>{val.street}</td>
              <td>{val.levels}</td>
              <td>{val.no_handicap}</td>
              <td>{val.no_compact}</td>
              <td>{val.no_electric}</td>
              <td>{val.no_normal}</td>
              <td>{val.no_handicap + val.no_compact + val.no_electric + val.no_normal}</td>
            </tbody>
          })}
        </table>
    </div>
    </>
  )
}
