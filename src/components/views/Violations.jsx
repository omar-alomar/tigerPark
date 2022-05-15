import React from 'react'

export default function Violations() {
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
          </table>
      </div>
    </>
  )
}
