import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Violations() {
  const [violationList, setViolationList] = useState([]);

  const getViolations = () => {
    Axios.get("https://tiger-park.herokuapp.com//violation").then((response) => {
      setViolationList(response.data);
    })
  }
  
  getViolations();

  return (
    <>
      <div className="violations">
        <h1>View violations</h1>
        <table>
          <thead>
              <tr>
                <td>Name</td>
                <td>License plate</td>
                <td>Garage</td>
                <td>Fine</td>
                <td>Balance due</td>
                <td>Reason</td>
              </tr>
            </thead>
            {violationList.map((val, key) => {
              return <tbody>
                <td key={val.vio_id}>{val.vio_id}</td>
                <td>{val.plate}</td>
              </tbody>
            })}
          </table>
      </div>
    </>
  )
}
