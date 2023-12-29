import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/${id}`)
      .then((result) => {
        console.log(result.data.user.email);
        setUser(result.data.user);
        setName(result.data.user.name);
        setAge(result.data.user.age);
        setEmail(result.data.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const Submit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/update/${id}`, {
        name,
        age,
        email,
      })
      .then((result) => {
        navigate("/");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div classname="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              value =  {name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              value =  {email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Age</label>
            <input
              type= "text"
              value =  {age}
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
