import React from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import axios from "axios";

function DeleteUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/delete/${id}`)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex bg-primary justify-content-center align-items-center">
      <h2 className="m-5">Are you sure wanted to delete!</h2>
      <button className="btn btn-warning m-2" onClick={handleDelete}>Yes</button>
      <Link to={"/"} className="btn btn-success m-2">No</Link>
    </div>
  );
}

export default DeleteUser;
