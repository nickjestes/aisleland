import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandNav() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="src\icons\icons8-island-on-water-48.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Island"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandNav;