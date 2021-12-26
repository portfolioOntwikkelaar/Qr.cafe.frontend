import { Button, Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'
import React from 'react'
import MainLayout from '../layouts/MainLayout';


const Home = () => (
  <MainLayout>
    <Jumbotron className="bg-light">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h1><b>QR Scherm Menu</b></h1>
            <h6 className="mt-4 mb-4">
              A smart way to share your digital menu in a QR scherm with your customers
            </h6>
            <br />
            <Button href="/places" variant="standard" size="lg">
              Create Your Menu
            </Button>
          </Col>
          <Col md={6} >
            <Image src="https://i.pinimg.com/originals/63/ce/80/63ce80be6f2e846536ddf25777b997d9.gif" rounded fluid />
          </Col>
        </Row>
      </Container>

    </Jumbotron>
  </MainLayout>
)

export default Home