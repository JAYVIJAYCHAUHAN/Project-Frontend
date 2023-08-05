// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ReceivingId.css";

const Receive = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get(" https://projectnith.onrender.com/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="mongo">Data from Mongodb:</h1>
      <div className="receive-table">
        {" "}
        {/* Use the new CSS class here */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((service) => (
              <tr key={service._id}>
                <td>{service._id}</td>
                <td>{service.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receive;
