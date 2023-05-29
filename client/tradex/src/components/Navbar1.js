import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBell,faBrightness } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Image, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


function Navbar1() {
  return (
    <Navbar className='navbar p-2 navbar-default py-2 navbar navbar-expand-lg navbar-light' bg="light" expand="lg">
      <div className="px-0 ps-2  container-fluid ">
        <NavbarBrand className='navbar-brand'>
            {/* <Image src='https://geeks-nextjs.vercel.app/images/brand/logo/logo.svg'></Image> */}
            <img src='https://opensea.io/static/images/logos/opensea-logo.svg' style={{width:'40px',height:"40px"}} />
        </NavbarBrand>
        {/* <Navbar.Brand href="">
            
        </Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse className=' navbar-collapse collapse' id="basic-navbar-nav ">
          <Nav className=" navbar-nav ">


            <NavDropdown className=' show nav-link' title="Browse" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className=' show nav-link' title="Landings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className=' show nav-link' title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className=' show nav-link' title="Accounts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

        

            <Form > 
              {/* <span className='position-absolute ps-3 pt-2 ml-5 search-icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />      
              </span> */}
              
              <Form.Group className=' show nav-link' controlId="searchText">
              
                <Form.Control type="text" placeholder="Search"  />
              </Form.Group>
            </Form>

            {/* <SearchForm/> */}

        </Nav>
        <Nav className='ms-auto d-flex align-items-center'>
          <NavbarCollapse className='navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap navbar-nav'>
              
              <span className='d-flex' style={{}}>
              <ul class="navbar-right-wrap ms-2 d-flex nav-top-wrap navbar-nav"  >
                  <a style={{backgroundColor:'lightgray'}} className='text-dark icon-notifications me-lg-1 btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted  '>
                  <li  className='dropdown'>
                  <FontAwesomeIcon icon={faBell} />
                  </li>
                  </a>
                  <a style={{backgroundColor:'lightgray'}} className='text-dark icon-notifications me-lg-1 btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted  '>
                  <li  className='dropdown'>
                  <FontAwesomeIcon icon={faBell} />
                  </li>
                  </a>
                  
                  <li className='ms-2 dropdown'>
                  <a className='rounded-circle    '>
                    <div className='avatar avatar-md avatar-indicators avatar-online'>
                    <img style={{height:40,width:40}} alt="avatar" src='assests/images/avatar-1.jpg' class="rounded-circle"/>
                    </div>
                 
                  </a>
                  </li>
                  
              </ul>

              </span>
          </NavbarCollapse>

        </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
}

export default Navbar1;