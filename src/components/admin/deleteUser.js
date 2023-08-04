 import { useState, useEffect } from "react";
 import axios from "axios";
 import "./delete.css";
 import Receive from "./ReceivingId";
 const DeleteData = () => {
   // const [success, setSuccess] = useState("");
   // const [error, setError] = useState(null);
   const [responseMsg, setResponseMsg] = useState("");
   const [dataI, setDataId] = useState("");

   useEffect(() => {
     setResponseMsg(null); // Reset error state on each form submission
   }, [dataI]);

   const handleDelete = async (event) => {
     event.preventDefault();

     try {
       const response = await axios.delete(
         `http://localhost:5000/api/dataa/${dataI}`
       );

       if (response.status === 200) {
         alert("User deleted successfully")
          window.location.reload();
         console.log("User deleted successfully");
         // setError("");
         // setSuccess("Data deleted successfully");
        // setResponseMsg("Data deleted successfully");
         // Optionally, update the UI or display a success message.
       } else {
        
         console.error("Error deleting data:", response.statusText);
          alert("Error deleting data. Please try again later.");
         // setSuccess("");
         // setError("Error deleting data. Please try again later.");
        // setResponseMsg("Error deleting data. Please try again later.");
       }
     } catch (error) {
 
       console.error("Error deleting data:", error.message);
             alert("Error deleting data. Please try again later.");
       // setSuccess("");
       // setError("Error deleting data. Please try again later.");
       //setResponseMsg("Error deleting data. Please try again later.");
     }
   };

   return (
     <div className="delete-data-container">
       {/* <h1>Admin Dashboard</h1> */}
       {/* {success && <p>{success}</p>}
      {error && <p>{error}</p>} */}
       {responseMsg && <p>{responseMsg}</p>}
       <form onSubmit={handleDelete}>
         <label htmlFor="dataI">
              <h3>  Delete User:</h3>
         </label>
         <input
           type="text"
           id="dataI"
           name="dataI"
           value={dataI}
           placeholder="Enter User ID"
           onChange={(e) => setDataId(e.target.value)}
           required
         />
         <button type="submit">Delete User</button>
         {/* <Receive></Receive> */}
       </form>
     </div>
   );
 };

 export default DeleteData;
