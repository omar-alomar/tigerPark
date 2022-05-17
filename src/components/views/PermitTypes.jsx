import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function PermitTypes() {
    const [typesList, setHoldersList] = useState([]);

  const getTypes = () => {
    Axios.get("https://tiger-park.herokuapp.com//types").then((response) => {
      setHoldersList(response.data);
    })
  }
  getTypes();
  return (
    <>
      <div className="types">
        <h1>View and edit permit types</h1>
        <table>
          <thead>
              <tr>
                <td>Permit type</td>
                <td>Daily Cost</td>
                <td>Garages accessed</td>
                <td>Permits issued</td>
                <td>Permits remaining</td>
              </tr>
            </thead>
            {typesList.map((val, key) => {
              return <tbody>
                <td>{val.perm_type}</td>
                <td>{val.daily_cost}</td>
              </tbody>
            })}
          </table>
          <br/>
      </div>
    </>
  )
}
