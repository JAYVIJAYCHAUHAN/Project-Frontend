import { useState, useEffect } from "react";
import axios from "axios";
 import "./delete.css"
import Receive from "./ReceivingId";
const DeleteData = () => {
  // const [success, setSuccess] = useState("");
  // const [error, setError] = useState(null);
  const [responseMsg, setResponseMsg] = useState("");
  const [dataId, setDataId] = useState("");

  useEffect(() => {
    setResponseMsg(null); // Reset error state on each form submission
  }, [dataId]);

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/data/${dataId}`
      );

      if (response.status === 200) {
        alert("Data deleted successfully");
        window.location.reload(); 
        console.log("Data deleted successfully");
        // setError("");
        // setSuccess("Data deleted successfully");
        setResponseMsg("Data deleted successfully");
        // Optionally, update the UI or display a success message.
      } else {
        alert("Error deleting data. Please try again later.");
        console.error("Error deleting data:", );
        // setSuccess("");
        // setError("Error deleting data. Please try again later.");
        setResponseMsg("Error deleting data. Please try again later.");
      }
    } catch (error) {
      alert("Error deleting data. Please try again later.");
      console.error("Error deleting data:", error.message);
      // setSuccess("");
      // setError("Error deleting data. Please try again later.");
      setResponseMsg("Error deleting data. Please try again later.");
    }
  };

  return (
    <div className="delete-data-container">
      <h1>Admin Dashboard</h1>
      {/* {success && <p>{success}</p>}
      {error && <p>{error}</p>} */}
      {responseMsg && <p>{responseMsg}</p>}
      <form onSubmit={handleDelete}>
        <label htmlFor="dataId">
          <h2>Data ID to Delete:</h2>
        </label>
        <input
          type="text"
          id="dataId"
          name="dataId"
          value={dataId}
          placeholder="Enter Event ID"
          onChange={(e) => setDataId(e.target.value)}
          required
        />
        <button type="submit">Delete Event</button>
        <Receive></Receive>
      </form>
    </div>
  );
};

export default DeleteData;
