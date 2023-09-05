import { Outlet, Link } from "react-router-dom";
import "../css/layout.css";
const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <a>
              My Note !
            </a>
          </li>
          </ul>
          <ul>
          <li>
            <Link to="/">
              <button className="note__button">My Note</button>
            </Link>
          </li>
          <li>
            <Link to="/addnote">
              <button className="note__button">Add Note</button>
            </Link>
          </li>
          {/* <li>
            <Link to="/contact">
              <button className="note__button">Contact</button>
            </Link>
          </li> */}
        </ul>
      </nav>
      <hr/>
      <Outlet />
    </>
  )
};

export default Layout;