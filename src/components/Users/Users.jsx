import { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";

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
    <div className="container">
      <div className="formContainer">
        <form id="form1">
          <label id="label1">
            <h1>Search Here:</h1>
          </label>
          <input
            id="input1"
            type="text"
            placeholder="Search by username"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </form>
        <form id="form1">
          <label id="label1">
            <h1>Sort by:</h1>
          </label>

          <select id="input1" onClick={(e) => handleSelect(e)}>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="company">Company Name</option>
          </select>
        </form>
      </div>

      <div className="userContainer">
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
