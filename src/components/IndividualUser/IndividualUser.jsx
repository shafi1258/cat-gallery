import  { useEffect, useState } from "react";
import { Button, Card, } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function IndividualUser() {
  const { id } = useParams();

  const [individualUser, setIndividualUser] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIndividualUser(data);
      });
  }, []);

  console.log("Individual User", id);
  console.log(individualUser);

  if (individualUser) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          // backgroundColor: "green",
          marginTop: "20px",
        }}
      >
        <div >
          <Card
            key={individualUser.id} 
            style={{
              // width: "18rem",
              width: "50vw",
              margin: "0px 15px 15px 0px",
              background: "#daddf0"
            }}
          >
            <Card.Img className="CardImg"
              variant="top"
              src={individualUser.image}
              style={{
                width: "20vw",
                display: "flex",
                backgroundColor: "white",
                borderRadius: "20px",
                margin: "0 auto",
                marginTop: "20px",
              }}
            />
            <Card.Body style={{ margin: "0 auto" }}>
              <Card.Title>
               <h1 style={{fontSize: "25px"}}> Name: {individualUser.firstName} {individualUser.lastName}</h1>
              </Card.Title>
              <Card.Text>Email: {individualUser.email}</Card.Text>
              <Card.Text>Username: {individualUser.username}</Card.Text>
              <Card.Text>
                Address: {individualUser.address.address},{" "}
                {individualUser.address.state}, {individualUser.address.city}{" "}
              </Card.Text>
              <Card.Text>Company: {individualUser.company.name}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Link to={"/"}>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          // backgroundColor: "green",
          marginTop: "20px",
        }}
      >
        <h1>loading...</h1>
      </div>
    );
  }
}

export default IndividualUser;
