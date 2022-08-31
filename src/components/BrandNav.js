import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MultiStore from '../MultiStorePage';

function BrandNav() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="/search">
            {/* <img
              src="../"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}

            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Enter Store Name"
                className="me-2"
                aria-label="Search"
                />
                <Form.Control
                type="search"
                placeholder="Enter Zip Code"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">
                    Search
                </Button>
            </Form>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}




// Route dump 
// onClick={
//     <Router>
//         <Routes>
//         <Route path="/search" element={<MultiStore/>}/>
//     </Routes>
// </Router>
// }>

export default BrandNav;