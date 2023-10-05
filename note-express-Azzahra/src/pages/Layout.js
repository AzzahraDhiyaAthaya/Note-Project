import { Outlet } from "react-router-dom";
import "../css/layout.css";
import {SlNotebook } from 'react-icons/sl';
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  Nav,
  Navbar,
  Container,

} from "react-bootstrap";

const Layout = () => {


  return (
    <>
      {/* <nav className="nav">
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
           <li>
            <Link to="/contact">
              <button className="note__button">Contact</button>
            </Link>
          </li> 
        </ul>
      </nav>
      <hr/> */}

     <header>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <SlNotebook size="25px" color="white"/>
        <Navbar.Brand href="/">My Note !</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Addnote">Add Note
            </Nav.Link>
           
          </Nav>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form> */}

        </Navbar.Collapse>
      </Container>
      </Navbar>
     </header>
      <Outlet />
    </>
  )
};

export default Layout;