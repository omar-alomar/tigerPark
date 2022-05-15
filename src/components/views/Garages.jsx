import React from 'react'

export default function Garages() {
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
            </tr>
          </thead>
        </table>
    </div>
    </>
  )
}
