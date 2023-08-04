//   import{Link}from 'react-router-dom'
//    import './footer.css'
  
//   function Footer() {
//   return (
//     <div className="footer-card">
//       <div>
//         <a
//           className="a-links footer-links"
//           href="https://www.facebook.com/nithamirpur/"
//           target="_blank"
//         >
//           Facebook
//         </a>

//         <a
//           className="a-links footer-links"
//           href="https://www.instagram.com/nit_hamirpur/?hl=en "
//           target="_blank"
//         >
//           Instagram
//         </a>
//         <a
//           className="a-links footer-links"
//           href="https://twitter.com/NITHamirpurHP?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
//           target="_blank"
//         >
//           Twitter
//         </a>
//         <a
//           className="a-links footer-links"
//           href="https://www.linkedin.com/school/national-institute-of-technology-hamirpur/?originalSubdomain=in"
//           target="_blank"
//         >
//           Youtube
//         </a>
//         <a
//           className="a-links footer-links"
//           href="https://www.linkedin.com/school/national-institute-of-technology-hamirpur/?originalSubdomain=in"
//           target="_blank"
//         >
//           Linkedin
//         </a>
//       </div>
//       <div className="mid">
//         {" "}
//         © 2023 All Rights Reserved .National Institute of Technology Hamirpur
//       </div>
//       <div>
//         {/* <Link
//           className="a-links"
//           to="https://jayvijaychauhan.github.io/nith-event-fronted/"
//           target="_blank"
//         >
//           About Clubs
//         </Link> */}
//         <Link
//           className="a-links footer-links"
//           to="https://nith.ac.in/"
//           target="_blank"
//         >
//           NIT Hamirpur
//         </Link>

//         <Link className="a-links footer-links" to="/contact">
//           Contact Us
//         </Link>

//         <div className="   footer-links" to="/about">
//           <Link className="links" to="/about">
//             About Us
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
 
//  export default Footer ;


 
import "./footer.css";
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
 

// Rest of the component code...

function Footer() {
  return (
    <div className="footer-card">
      <div>
        <a
          className="a-links footer-links"
          href="https://www.facebook.com/nithamirpur/"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i> Facebook
        </a>

        <a
          className="a-links footer-links"
          href="https://www.instagram.com/nit_hamirpur/?hl=en "
          target="_blank"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a
          className="a-links footer-links"
          href="https://twitter.com/NITHamirpurHP?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a
          className="a-links footer-links"
          href="https://www.linkedin.com/school/national-institute-of-technology-hamirpur/?originalSubdomain=in"
          target="_blank"
        >
          <i className="fab fa-youtube"></i> Youtube
        </a>
        <a
          className="a-links footer-links"
          href="https://www.linkedin.com/school/national-institute-of-technology-hamirpur/?originalSubdomain=in"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i> Linkedin
        </a>
      </div>
      <div className="mid">
        © 2023 All Rights Reserved. National Institute of Technology Hamirpur
      </div>
      <div>
        <Link
          className="a-links footer-links"
          to="https://nith.ac.in/"
          target="_blank"
        >
          NIT Hamirpur
        </Link>

        <Link className="a-links footer-links" to="/contact">
          Contact Us
        </Link>

        <div className="   footer-links" to="/about">
          <Link className="links" to="/about">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
