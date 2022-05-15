import React from 'react'

export default function PermitTypes() {
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
          </table>
          <br/>
          <table>
          <thead>
              <tr>
                <td>Permit id</td>
                <td>Holder name</td>
                <td>Permit type</td>
                <td># of vehicles</td>
                <td>Restrictions</td>
              </tr>
            </thead>
          </table>
      </div>
    </>
  )
}
