import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import './App.css';


function App() {
  return (
    <div className="App">
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
          <th>Item Name</th>
          <th>Ailse Number</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bread</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Cereal</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Granola Bars</td>
          <td>Larry the Bird</td>
          <td></td>
        </tr>
        <tr>
          <td>Pasta</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Jams</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Coffee</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Tea</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Baking</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Bulk Foods</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Chips</td>
          <td></td>
          <td>Otto</td>
        </tr>
      <tr>
          <td>Rice</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Condiments</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Salad Dressing</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Eggs</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Juice</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Butter</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Milk</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Creamer</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Cheese</td>
          <td></td>
          <td>Otto</td>
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
          <th>Item Name</th>
          <th>Ailse Number</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bread</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Cereal</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>Granola Bars</td>
          <td>Larry the Bird</td>
          <td></td>
        </tr>
        <tr>
          <td>Pasta</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Jams</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Coffee</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Tea</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Baking</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Bulk Foods</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Chips</td>
          <td></td>
          <td>Otto</td>
        </tr>
      <tr>
          <td>Rice</td>
          <td></td>
          <td>Otto</td>
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
          <th>Item Name</th>
          <th>Ailse Number</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tomatos</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Beans</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Peas</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Peaches</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Tuna</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Chili</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Soup</td>
          <td></td>
          <td></td>
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
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
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
          <th>Item Name</th>
          <th>Ailse Number</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bread</td>
          <td></td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Cereal</td>
          <td>Jacob</td>
          <td>Thornton</td>
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
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default App;
