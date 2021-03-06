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
  const onRegister = () => {
    history.replace("/register")
  }

  const onSignOut = () => {
    auth.signOut();
    history.push("/login");
  }

  const gotoPlaces = () => {
    history.push("/places");
  }
  return (
    <>
    <Navbar bg="light" variant="light" className="mb-4">
      <Navbar.Brand href="/">QR Scherm</Navbar.Brand>
      <Nav >
        <Nav.Link onClick={gotoPlaces}>Places</Nav.Link>
      </Nav>
      <Nav className="flex-grow-1 justify-content-end">
        {auth.token ? (
          <Nav.Link onClick={onSignOut}>Logout</Nav.Link>
        ) : (
          [

            <Nav.Link key={1} onClick={onSignIn}>Login</Nav.Link>,
            <Nav.Link key={2} onClick={onRegister}>Register</Nav.Link>
          ]
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