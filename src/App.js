import React, { Component } from 'react';
import './styles.css';
import logo from "./images/logo.png";
import profilePic from './images/profile.png'
import { Navbar, Nav, Form, Row } from 'react-bootstrap';
import CardItem from "./components/cardItem";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          postId: 1,
          postTag: "SUSPENSE",
          postTagColor: "#FEDCD2",
          postTitle: "Title of Book",
          postWriter: "Writer Name",
          postFund: 35,
          postLike: 354,
          postComment: 28,
          postShare: 16,
          postDescription: "Phasellus nec sem in justo pellentesque facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada egestas. "
        },{
          postId: 2,
          postTag: "Mystery",
          postTagColor: "#F37078",
          postTitle: "Title of Book",
          postWriter: "Writer Name",
          postFund: 35,
          postLike: 354,
          postComment: 28,
          postShare: 16,
          postDescription: "Phasellus nec sem in justo pellentesque facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada egestas. "
        },
        {
          postId: 3,
          postTag: "Thriller",
          postTagColor: "#FFE4BD",
          postTitle: "Title of Book",
          postWriter: "Writer Name",
          postFund: 35,
          postLike: 354,
          postComment: 28,
          postShare: 16,
          postDescription: "Phasellus nec sem in justo pellentesque facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada egestas. "
        },
        {
          postId: 4,
          postTag: "LOREM",
          postTagColor: "#6A8C67",
          postTitle: "Title of Book",
          postWriter: "Writer Name",
          postFund: 35,
          postLike: 354,
          postComment: 28,
          postShare: 16,
          postDescription: "Phasellus nec sem in justo pellentesque facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada egestas. "
        },{
          postId: 5,
          postTag: "Thrille",
          postTagColor: "#FFE4BD",
          postTitle: "Title of Book",
          postWriter: "Writer Name",
          postFund: 35,
          postLike: 354,
          postComment: 28,
          postShare: 16,
          postDescription: "Phasellus nec sem in justo pellentesque facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada egestas. "
        }, {
          postId: 6,
          postTag: "SUSPENSE",
          postTagColor: "#FEDCD2",
          postTitle: "Title of Book",
          postWriter: "Writer Name",
          postFund: 35,
          postLike: 354,
          postComment: 28,
          postShare: 16,
          postDescription: "Phasellus nec sem in justo pellentesque facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada egestas. "
        },
      ]
    }
  }
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
              <Navbar.Brand href="#home"><img src={logo} className="nav-logo" alt="" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center mr-auto ml-auto">
                  <Nav.Link className="nav-active" href="#home">
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                  </Nav.Link>
                </Nav>
                <Form inline>
                  <Nav.Link className="nav-active" href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Blogs</Nav.Link>
                  <Nav.Link href="#link">Generes</Nav.Link>
                  <Nav.Link href="#link">top writes</Nav.Link>
                  <Nav.Link href="#link">contact us</Nav.Link>
                  <Nav.Link href="#link"><i className="fa fa-envelope-o" aria-hidden="true"></i></Nav.Link>
                  <Nav.Link href="#link"><i className="fa fa-bell-o" aria-hidden="true"></i></Nav.Link>
                  <Nav.Link href="#link"><img src={profilePic} className="profile-pic" alt="" /></Nav.Link>
                </Form>
              </Navbar.Collapse>
            </Navbar>

            <div className="all-posts">

              <h4>All Posts</h4>
              <Row>
                <CardItem data={this.state.products} />
              </Row>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default App;
