import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Holders() {
  const [holdersList, setHoldersList] = useState([]);

  const getPerson = () => {
    Axios.get("http://localhost:3001/holders").then((response) => {
      setHoldersList(response.data);
    })
  }

  getPerson();
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
              <td>Email</td>
              <td>Permit type</td>
              <td>Expiration date</td>
              {/* <td>Validity</td> */}
              <td>Permit number</td>
              <td>Vehicle</td>
              {/* <td>Pending violations</td> */}
            </tr>
          </thead>
          {holdersList.map((val, key) => {
            return <tbody>
              <td>{val.fname + ' ' + val.minit + '. ' + val.lname}</td>
              <td key={val.id}>{val.id}</td>
              <td>{val.tel}</td>
              <td>{val.email}</td>
              <td>{val.perm_type}</td>
              <td>{val.expiry_date}</td>
              <td>{val.perm_id}</td>
              <td>{val.make + " " + val.model}</td>
            </tbody>
          })}
        </table>
      </div>
    </>
  )
}
