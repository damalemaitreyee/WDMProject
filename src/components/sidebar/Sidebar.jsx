import { Link } from "react-router-dom";
import "./sidebar.css";
import background from '../../images/pool.jpeg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT LUNAMAR</span>
        <img
          src={background}
          alt=""
        />
        <p>
        Lunamar is a huge subdivision which has a lot of buildings.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Services We Offer</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="">
              Building Management
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Apartment Management
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Visitors
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Security
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Pool
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="">
              Garden
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
