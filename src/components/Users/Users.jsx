import { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";
import React from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const [userName, setUserName] = useState("");

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSelect = (e) => {
    console.log(e.target.value);

    if (e.target.value) {
      if (e.target.value === "username") {
        let y = users.sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else {
            return 0;
          }
        });

        setUsers(y);
        setSelectedValue("username");
        console.log(users);
      } else if (e.target.value === "email") {
        let y = users.sort((a, b) => {
          if (a.email > b.email) {
            return 1;
          } else if (a.email < b.email) {
            return -1;
          } else {
            return 0;
          }
        });

        setUsers(y);
        setSelectedValue("email");
      } else if (e.target.value === "company") {
        let y = users.sort((a, b) => {
          if (a.company.name > b.company.name) {
            return 1;
          } else if (a.company.name < b.company.name) {
            return -1;
          } else {
            return 0;
          }
        });

        setUsers(y);
        setSelectedValue("company");
      } else if (e.target.value === "category") {
        let y = users.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          } else if (a.id < b.id) {
            return -1;
          } else {
            return 0;
          }
        });

        setUsers(y);
        setSelectedValue("company");
      }
    }
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
      });
  }, [userName]);

  return (
    <div className="users-container">
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
            <option value="category">Category</option>
            <option value="username">Name</option>
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
