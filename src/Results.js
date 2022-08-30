import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';


function Results() {
  return (
    <div className="Results">
      <h1 className='text-center'>AisleLand</h1>
      <h3 className='text-center'>query for store name</h3>
      <h3 className='text-center'>Food</h3>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Grocery Items</Accordion.Header>
        <Accordion.Body>   
          <Table striped bordered hover>
      <thead>
        <tr>
          <th className='text-center'>Item Name</th>
          <th className='text-center'>Ailse Number</th>
          <th className='text-center'>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bread</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Cereal</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Granola Bars</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Pasta</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Jams</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Coffee</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Tea</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Baking</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Bulk Foods</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Chips</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      <tr>
          <td>Rice</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Condiments</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Salad Dressing</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Eggs</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Juice</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Butter</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Milk</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Creamer</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Cheese</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="7">
        <Accordion.Header>Frozen Food</Accordion.Header>
        <Accordion.Body>   
          <Table striped bordered hover>
      <thead>
        <tr>
          <th className='text-center'>Item Name</th>
          <th className='text-center'>Ailse Number</th>
          <th className='text-center'>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bread</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Cereal</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Granola Bars</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Pasta</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Jams</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Coffee</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Tea</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Baking</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Bulk Foods</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Chips</td>
          <td></td>
          <td>
           <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      <tr>
          <td>Rice</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
      <Accordion.Header>Canned Food</Accordion.Header>
      <Accordion.Body>
          <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th className='text-center'>Item Name</th>
          <th className='text-center'>Ailse Number</th>
          <th className='text-center'>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tomatos</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Beans</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Peas</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Peaches</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Tuna</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Chili</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Soup</td>
          <td></td>
          <td>
            <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
          </Accordion.Body>
      </Accordion.Item>
  
    </Accordion>

  <h3 className='text-center'>Household Items</h3>


    <Accordion>
    <Accordion.Item eventKey='3'>
        <Accordion.Header>Cleaning</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th className='text-center'>Item Name</th>
        <th className='text-center'>Ailse Number</th>
        <th className='text-center'>Update</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Paper Towels</td>
        <td></td>
        <td>
         <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Napkins</td>
        <td></td>
        <td>
          <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Rubber Gloves</td>
        <td></td>
        <td>
          <Form className='text-center'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
              </Form.Group>
              <Button size="sm" variant="outline-success" type="submit">
               Submit
              </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Sponges</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Detergent</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Fabric Softener</td>
        <td></td>
        <td>
         <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Cleaners</td>
        <td></td>
        <td>
         <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Garbage Bags</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Toilet Paper</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Brooms and Mops</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
    </tbody>
  </Table>
        </Accordion.Body>
    </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pharmacy</Accordion.Header>
        <Accordion.Body>   
          <Table striped bordered hover>
      <thead>
        <tr>
          <th className='text-center'>Item Name</th>
          <th className='text-center'>Ailse Number</th>
          <th className='text-center'>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hair Products</td>
          <td></td>
          <td>
            <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
          </td>
        </tr>
        <tr>
          <td>Cold and Flu</td>
          <td></td>
          <td>
            <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
          </td>
        </tr>
        <tr>
        <td>Pain Medication</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Contraception</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      </tbody>
    </Table>
    </Accordion.Body>
    </Accordion.Item>
  
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Baby</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th className='text-center'>Item Name</th>
        <th className='text-center'>Aisle Number</th>
        <th className='text-center'>Update</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Formula</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
      <tr>
        <td>Diapers</td>
        <td></td>
        <td>
          <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className='text-center' size="small" type="input" placeholder="Update Aisle" />
                </Form.Group>
                <Button size="sm" variant="outline-success" type="submit">
                Submit
                </Button>
            </Form>
        </td>
      </tr>
    </tbody>
  </Table>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Results;
