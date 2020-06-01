import React, { Component} from 'react';
import './styles.css';
import logo from "./images/logo.png";
import profilePic from './images/profile.png'
import {Navbar,Nav,Form,FormControl,Row} from 'react-bootstrap';
import CardItem from "./components/cardItem";
 class App extends Component {
   
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <div className="main-container">
        </div>
        <div className="side-orange">
        </div>
        <div className="main-content">
          <Navbar bg="red" expand="lg">
  <Navbar.Brand href="#home"><img src={logo} className="nav-logo" alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-center mr-auto ml-auto">
    <Nav.Link className="nav-active" href="#home"><FormControl type="text" placeholder="Search" className="mr-sm-2" /></Nav.Link>
    </Nav>
    <Form inline>
    <Nav.Link className="nav-active" href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Blogs</Nav.Link>
      <Nav.Link href="#link">Generes</Nav.Link>
      <Nav.Link href="#link">top writes</Nav.Link>
      <Nav.Link href="#link">contact us</Nav.Link>
      <Nav.Link href="#link"><i className="fa fa-envelope-o" aria-hidden="true"></i></Nav.Link>
      <Nav.Link href="#link"><i className="fa fa-bell-o" aria-hidden="true"></i></Nav.Link>
      <Nav.Link href="#link"><img src={profilePic} className="profile-pic" alt=""/></Nav.Link>
    </Form>
  </Navbar.Collapse>
</Navbar> 

      <div className="all-posts">
      
        <h4>All Posts</h4>
      <Row>
      <CardItem color="#FEDCD2" />
      <CardItem color="#F37078" />
      <CardItem color="#FFE4BD" />
      <CardItem color="#6A8C67" />
      <CardItem color="#FFE4BD" />
      <CardItem color="#FEDCD2" />
      </Row>
      </div>
        </div>
        </div>
        
      </React.Fragment>
    )
  }
}

export default App;
