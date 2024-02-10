import { useEffect, useState } from "react";
import User from "../User/User";

function Users() {
  const [users, setUsers] = useState([]);

  const [userName, setUserName] = useState("");

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (userName) {
          users.map((user) => {
            if (user.username === userName) {
              setUsers([user]);
            }
          });
        } else {
          setUsers(data.users);
        }

        if (selectedValue) {
        }
      });
  }, [userName, selectedValue]);

  console.log(users);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <form
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label style={{ fontSize: "35px", marginRight: "10px" }}>
            Search Here:
          </label>
          <input
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              borderColor: "gray",
              padding: "15px",
              marginRight: "10px",
              color: "black",
            }}
            type="text"
            placeholder="Search by username"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </form>
        <form>
          <label style={{ fontSize: "35px", marginRight: "10px" }}>
            Sort by:
          </label>

          <select onClick={(e) => handleSelect(e)}>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="company">Company Name</option>
          </select>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        {users.map((user, i) => {
          return (
            <User
              key={Math.random()}
              user={user}
              i={i}
              selectedValue={selectedValue}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Users;
