
import React from "react"
import { Button, Container, Navbar, Nav, Form, } from   'react-bootstrap';


function Headercha() {



  return (
    <header>
     <div id="home" className="header">
     <div className="header_top">
        <div className="container">
          <div className="row">
            <Navbar expand="lg">
              <Container className="pad" fluid>
                <Navbar.Brand href="#">Trevland</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link className="ul1" href="#home">Home</Nav.Link>
                    <Nav.Link className="ul2" href="#location">Location</Nav.Link>
                    <Nav.Link className="ul3" href="#blog">Blog</Nav.Link>
                    <Nav.Link className="ul4" href="#about">About</Nav.Link>
                    <Nav.Link className="ul5" href="#contact">Contact</Nav.Link>




                  </Nav>
                  <Form>

                    <button className="btn1" >Search</button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
      <div className="header_main">
        <div className="container">
          <div className="row flex-column ">
            <h1>Railtrips To Here, <br /> There And Everywhere!</h1>
            <p>We all wish to start our year the best way possible and <br /> also according to a common belief if you have a great <br /> start to your.</p>
            <button>Explore more</button>


          </div>
        </div>
      </div>
     </div>

    </header>

  )



}
export default Headercha;



