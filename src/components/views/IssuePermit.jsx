import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function IssuePermit() {
  const [type_id, setType_id] = useState("");
  const [fname, setFname] = useState("");
  const [minit, setMinit] = useState("");
  const [lname, setLname] = useState("");
  const [id, setId] = useState(0);
  const [tel, setTel] = useState(0);
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState(0);
  const [issueList, setIssueList] = useState([]);
  const [exp, setExp] = useState("");
  const [color, setColor] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [plate, setPlate] = useState("");

  console.log(dob);

  const issuePermit = () => {
    Axios.post("http://localhost:3001/create", {
      type_id: type_id,
      fname: fname,
      minit: minit,
      lname: lname,
      id: id,
      tel: tel,
      email: email,
      dob: dob,
      street: street,
      city: city,
      zip: zip,
      exp: exp,
      color: color,
      make: make,
      model: model,
      plate: plate
    }).then(() => {
      setIssueList([
        ...issueList,
        {
          type_id: type_id,
          fname: fname,
          minit: minit,
          lname: lname,
          id: id,
          tel: tel,
          email: email,
          dob: dob,
          street: street,
          city: city,
          zip: zip,
          exp: exp,
          color: color,
          make: make,
          model: model,
          plate: plate
        },
      ]);
    });
  };


  return (
    <>
      <div className="issue">
        <h1>Issue a new permit</h1>
        <div className="issue__form">
          {/* Create Person: */}
          <div className="issue__form__field">
            <label>Permit type:</label>
              <select id="type_id"
              defaultValue={"default"} 
              onChange={(event) => {
                setType_id(event.target.value)
              }}>
                <option value="default" disabled hidden>Select an Option</option>
                <option value={1}>Commuter student</option>
                <option value={2}>Resident student</option>
                <option value={3}>Staff</option>
                <option value={4}>Visitor</option>
              </select>
          </div>
          <div className="issue__form__field">
          <label>First name:</label>
            <input type="text" name="fname"
            onChange={(event) => {
              setFname(event.target.value)
            }} />
            <label>Middle initial:</label>
            <input type="text" name="minit"
            onChange={(event) => {
              setMinit(event.target.value)
            }} />
            <label>Last name:</label>
            <input type="text" name="lname"
             onChange={(event) => {
              setLname(event.target.value)
            }}/>
          </div>
          <div className="issue__form__field">
            <label>NetID/ParkMobile ID:</label>
            <input type="text" name="id"
            onChange={(event) => {
              setId(event.target.value)
            }} />
          </div>
          <div className="issue__form__field">
            <label>Phone number:</label>
            <input type="text" name="phone"
            onChange={(event) => {
              setTel(event.target.value)
            }} />
          </div>
          <div className="issue__form__field">
            <label>Email:</label>
            <input type="text" name="email"
            onChange={(event) => {
              setEmail(event.target.value)
            }} />
          </div>
          <div className="issue__form__field">
            <label>Date of birth:</label>
            <input type="date" name="dob"
            onChange={(event) => {
              setDob(event.target.value)
            }} />
          </div>
          <div className="issue__form__field">
            <label>Street:</label>
            <input type="text" name="street" 
            onChange={(event) => {
              setStreet(event.target.value)
            }}/>
            <label>City:</label>
            <input type="text" name="city"
            onChange={(event) => {
              setCity(event.target.value)
            }} />
            <label>ZIP:</label>
            <input type="number" name="zip" 
            onChange={(event) => {
              setZip(event.target.value)
            }}/>
          </div>

          {/* Create Permit: */}
          <div className="issue__form__field">
            <label>Expiration date:</label>
            <input type="date" name="expiry"
            onChange={(event) => {
              setExp(event.target.value)
            }} />
          </div>

          <div className="issue__form__field">
            <label>Vehicle:</label><br/>
            <label>Color:</label>
            <input type="text" name="color"
            onChange={(event) => setColor(event.target.value)}
            /><br/>
            <label>Make:</label>
            <input type="text" name="make"
            onChange={(event) => setMake(event.target.value)}
            /><br/>
            <label>Model:</label>
            <input type="text" name="model" 
            onChange={(event) => setModel(event.target.value)}
            /><br/>
            <label>Plate no:</label>
            <input type="text" name="plate" 
            onChange={(event) => setPlate(event.target.value)}
            /><br/>
          </div>

          <div className="issue__form__field">
            <button
            onClick={issuePermit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
