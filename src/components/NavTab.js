import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const NavTab = () => {
  const [auth, setAuth] = useState();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const auth = await authSelector;
      setAuth(auth);
    };

    fetchAuthUser();
  }, [authSelector]);

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand className="d-none d-sm-block" href="/">
        Seekajob
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <LinkContainer to="/jobs">
        <Nav.Link>Jobs</Nav.Link>
      </LinkContainer>

      {auth?.user?.role === 'worker' || auth?.user?.role === 'company' ? (
        <LinkContainer to="/applications">
          <Nav.Link>Applications</Nav.Link>
        </LinkContainer>
      ) : (
        <></>
      )}

      {auth?.user?.username ? (
        <NavDropdown title={auth?.user?.username} id="navbarScrollingDropdown" alignRight={true}>
          <LinkContainer to="/profile">
            <NavDropdown.Item href="#action3">Edit profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to="/logout">
            <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      ) : (
        <LinkContainer to="/login">
          <Button variant="outline-info">Login</Button>
        </LinkContainer>
      )}
    </Navbar>
  );
};

export default NavTab;
