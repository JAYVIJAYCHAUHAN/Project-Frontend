import "./servicesAdmin.css";
 
import { useEffect, useState } from "react";
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'
import DeleteUser from "./deleteUser";
function ListAdmin() {
   const navigate =useNavigate()
  const [admins, setAdmins] = useState([]);
  useEffect(() =>{
    if(localStorage.getItem('type')==='Subadmin')
      navigate('/admin/service')
    if(localStorage.getItem('type') ==='Admin'){
      navigate('/admin/list')
    }
  },[])
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/admins")
      .then((res) => {
        console.log(res.data);
        setAdmins(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="admin-card">
      <h1>Admin Dashboard</h1>
      <Link className="admin-add" to="/admin/add">
        Add Admin
      </Link>
      <DeleteUser></DeleteUser>
      <h2 className="ListUser">List of User</h2>
      {admins.length > 0 && (
        <div className="receive-table1">
          {" "}
          {/* Apply the table class */}
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Password</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={index}>
                  <td>{admin._id}</td>
                  <td>{admin.username}</td>
                  <td>{admin.password}</td>
                  <td>{admin.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ListAdmin;
