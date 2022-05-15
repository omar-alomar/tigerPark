import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Holders() {
  const [personList, setPersonList] = useState([]);

  const getPerson = () => {
    Axios.get("http://localhost:3001/holders").then((response) => {
      setPersonList(response.data);
    })
  }

  return (
    <>
      <div className="holders">
        <h1>View all permit-holders</h1>
        <table className="holders__table">
          <thead>
            <tr>
              <td>Name</td>
              <td>ID</td>
              <td>Phone</td>
              <td>Permit type</td>
              <td>Expiration date</td>
              <td>Validity</td>
              <td>Permit number</td>
              <td>Vehicle</td>
              <td>Pending violations</td>
            </tr>
          </thead>
          {personList.map((val, key) => {
            return <tbody>
              <td>{val.fname}</td>
              <td key={val.id}>{val.id}</td>
              <td>{val.tel}</td>
            </tbody>
          })}
        </table>
        <button onClick={getPerson}>Get data</button>
      </div>
    </>
  )
}
