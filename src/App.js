import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>AisleLand</h1>
      <h3>query for store name</h3>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Food</Accordion.Header>
          <Accordion.Body>   <Table striped bordered hover>
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
      </tbody>
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
    </Table></Accordion.Body>
          <Accordion.Header>Canned Food</Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Household Items</Accordion.Header>
        <Accordion.Body>
          adasdas
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default App;
