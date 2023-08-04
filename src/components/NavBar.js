import "./NavBar.css";

import { Link, useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-content-space-between bg-navbar p-10 ptb-20  ">
      <div>
        <b>National Institute of Technology Hamirpur</b>{" "}
      </div>
      <div className="flex">
        <div className="pl-5 nav-links">
          <Link className="links" to="/home">
            Home
          </Link>
        </div>
        {/* <div className="pl-5 nav-links">
          <Link className="links" to="/about">
            AboutUs
          </Link>
        </div> */}
        <div className="pl-5 nav-links">
          <Link className="links" to="/service">
            Event
          </Link>
        </div>
        <div className="pl-10 nav-links">
          {/* <Link className="links" to="/contact"> */}
          {/* {" "}
            Contact */}
          <Link
            // className="a-links"
            to="https://jayvijaychauhan.github.io/nith-event-fronted/"
            target="_blank"
          >
            <div className="links"> Clubs </div>{" "}
          </Link>

          {/* </Link> */}
        </div>
        {localStorage.getItem("token") && (
          <div className="pl-10 nav-links">
            <Link className="links" to="/admin/service">
              Add Event
            </Link>
             
              <Link className="links" to="/admin/delete">
                Delete Event
              </Link>
 
          </div>
        )}
        {localStorage.getItem("token") &&
          localStorage.getItem("type") === "Admin" && (
            <div className="pl-10 nav-links">
              <Link className="links" to="/admin/list">
                List Admin
              </Link>
            </div>
          )}
        {localStorage.getItem("token") ? (
          <button
            className="logout"
            onClick={() => {
              localStorage.clear();
              // navigate("/admin/dashboard");
              navigate("/home");
            }}
          >
            LOGOUT
          </button>
        ) : (
          <button
            className="login"
            onClick={() => {
              localStorage.clear();
              navigate("/admin/login");
            }}
          >
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
}
export default NavBar;
