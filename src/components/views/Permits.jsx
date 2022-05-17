import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Permits() {
  const [permitList, setPermitList] = useState([]);

  const getPermits = () => {
    Axios.get("https://tiger-park.herokuapp.com/permits").then((response) => {
      setPermitList(response.data);
    })
  }
  getPermits();
  return (
    <>
    <div className="permits">
      <h1>Permits</h1>
        <table>
        <thead>
            <tr>
            <td>Permit #</td>
            <td>Holder name</td>
            <td>Permit type</td>
            <td>License plate #</td>
            {/* <td>Restrictions</td> */}
            </tr>
            </thead>
            {permitList.map((val, key) => {
              return <tbody>
                <td key={val.perm_id}>{val.perm_id}</td>
                <td>{val.fname + ' ' + val.lname}</td>
                <td>{val.perm_type}</td>
                <td>{val.plate}</td>
              </tbody>
            })}
        </table>
    </div>
    </>
  )
}
