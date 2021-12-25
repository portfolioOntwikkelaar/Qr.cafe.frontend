import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
// import moduleName from 'module'

const MainLayout = ({ children }) => {
  const history = useHistory();
  const auth = useContext(AuthContext)
  const onSignIn = () => {
    history.replace("/login")
  }

  const onSignOut = () => {
    auth.SignOut();
    history.push("/login");
  }

  const goToPlaces = () => {
    history.push("/places");
  }
  return (
    <>
    <Navbar bg="light" variant="light" className="mb-4">
      <Navbar.Brand href="/">QR Scherm</Navbar.Brand>
      <Nav >
        <Nav.Link onClick={goToPlaces}>Places</Nav.Link>
      </Nav>
      <Nav className="flex-grow-1 justify-content-end">
        {auth.token ? (
          <Nav.Link onClick={onSignOut}>Logout</Nav.Link>
        ) : (
          <Nav.Link onClick={onSignIn}>Login</Nav.Link>
        )}
        
      </Nav>

    </Navbar>
    <Container>
      {children}
    </Container>
    </>
  )
}

export default MainLayout;