import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.scss";

const CustomerPage = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/";
    axios.get(`${url}users`).then((data) => setUsers(data.data));
  }, []);

  return (
    <main>
      <div className="Container">
        <h1>CustomerPage</h1>
        <p>
          That is a Customers page and I just take 'users' api and wrote on the
          page with styles. It doesn't have additional something
        </p>

        <div className="all">
          {users.map((elem) => {
            return (
              <ul className="usersApi">
                <li>{elem.id}</li>
                <li>{elem.name}</li>
              </ul>
            );
          })}
        </div>
        <button className="navigateButton" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </main>
  );
};

export default CustomerPage;
