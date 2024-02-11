import { Container } from "react-bootstrap";
import Users from "../components/Users/Users";
import Header from "../components/Header/Header";

function Home() {
  return (
    <Container
      fluid
      style={{
        background:
          "linear-gradient(78deg, rgba(92,92,112,0.9865196078431373) 45%, rgba(110,110,138,1) 98%)",
      }}
    >
      <Header />
      <Users />
    </Container>
  );
}

export default Home;
