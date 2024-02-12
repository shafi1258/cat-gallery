import React from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import IndividualUser from "../IndividualUser/IndividualUser";


function User({ user, i, selactedValue }) {
  // console.log(user);

  // console.log(i);

  const navigate = useNavigate();

  const handleClick = (i) => {
    navigate(`/page-details/${Number(i + 1)}`);
  };

  //change started

  const { image, firstName, lastName, email, username } = user;
  return (
    <div>
    <Card
      
      key={i}
      style={{ width: "18rem", margin: "0px 15px 15px 0px", background: "#daddf0" }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style= {{cursor: "pointer"}} onClick={() => handleClick(i)}>
          Name: {firstName} {lastName}
        </Card.Title>
        <Card.Text>Username: {username}</Card.Text>
        <Card.Text>Email: {email}</Card.Text>
        <Card.Text>
          Address: {user.address.address}, {user.address.state},{" "}
          {user.address.city}{" "}
        </Card.Text>
        <Card.Text>Company: {user.company.name}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default User;
