import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useParams } from "react-router-dom";

import {useEffect, useState} from 'react';



function StoreTable() {
  // Query for looping through objects that contain aisle and name

  const {id} = useParams()
  const [foodItems, setFoods] = useState([])
  const [houseItems, setHouseItems] = useState ([])
  const URL_PREFIX= "http://localhost:3001"

  console.log(id)

  // Food fetch
  useEffect(()=>{
    fetch(`${URL_PREFIX}/api/foods/${id}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    } 
  }).then(res=>{
    return res.json()
  }).then(data=>{
    console.log(data)
    setFoods(data)
  })
  },[])

  // houseItem Fetch
  useEffect(()=>{
    fetch(`${URL_PREFIX}/api/households/${id}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    } 
  }).then(res=>{
    return res.json()
  }).then(data=>{
    console.log(data)
    setHouseItems(data)
  })
  },[])

  const updateAisle = (e) =>{
    e.preventDefault()
    const foodID = e.target.getAttribute("id")
    fetch(`${URL_PREFIX}/api/foods/${foodID}`,{
      method:"PUT",
      body:JSON.stringify({
        aisleLocation: e.target.children[0].children[0].value,
      }),
      headers:{
          "Content-Type":"application/json"
      } 
    }).then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      const newFood = foodItems.map(item=>{
        if (item._id == foodID){
          return data
        }
        return item
      })
      setFoods(newFood)
    })
  }



  return (
    <div className="StoreTable">
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
          <td>Bread<img src={require("../icons/foodIcons/icons8-bread-48.png")}></img></td>
          <td>{foodItems?.find(breadItem=>(breadItem.typeName.toLowerCase()==="bread"))?.aisleLocation}</td>
          <td>
           <Form onSubmit={updateAisle} className='text-center' id={foodItems?.find(breadItem=>(breadItem.typeName.toLowerCase()==="bread"))?._id}>
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
          <td>{foodItems?.find(cerealItem=>(cerealItem.typeName.toLowerCase()==="cereal"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(GranolaBarIteam=>(GranolaBarIteam.typeName.toLowerCase()==="granola bars"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(pastaIteam=>(pastaIteam.typeName.toLowerCase()==="pasta"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(jamItem=>(jamItem.typeName.toLowerCase()==="jams"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(coffeeItem=>(coffeeItem.typeName.toLowerCase()==="coffee"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(teaItem=>(teaItem.typeName.toLowerCase()==="tea"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(bakingItem=>(bakingItem.typeName.toLowerCase()==="baking"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(bulkItem=>(bulkItem.typeName.toLowerCase()==="bulk foods"))?.aisleLocation}</td>
          <td></td>
        </tr>
        <tr>
          <td>Chips</td>
          <td>{foodItems?.find(chipsItem=>(chipsItem.typeName.toLowerCase()==="chips"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(riceItem=>(riceItem.typeName.toLowerCase()==="rice"))?.aisleLocation}</td>
          <td></td>
        </tr>
        <tr>
          <td>Condiments</td>
          <td>{foodItems?.find(condimentsItem=>(condimentsItem.typeName.toLowerCase()==="condiments"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(saladItem=>(saladItem.typeName.toLowerCase()==="salad dressing"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(eggsItem=>(eggsItem.typeName.toLowerCase()==="eggs"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(juiceItem=>(juiceItem.typeName.toLowerCase()==="juice"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(butterItem=>(butterItem.typeName.toLowerCase()==="butter"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(milkItem=>(milkItem.typeName.toLowerCase()==="milk"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(creamerItem=>(creamerItem.typeName.toLowerCase()==="creamer"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(cheeseItem=>(cheeseItem.typeName.toLowerCase()==="cheese"))?.aisleLocation}</td>
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
          <td>Pizza</td>
          <td>{foodItems?.find(pizzaIteam=>(pizzaIteam.typeName.toLowerCase()==="frozen pizza"))?.aisleLocation}</td>
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
          <td>Single Meals</td>
          <td>{foodItems?.find(singelMealsItem=>(singelMealsItem.typeName.toLowerCase()==="frozen single meals"))?.aisleLocation}</td>
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
          <td>Burritos</td>
          <td>{foodItems?.find(burritoItem=>(burritoItem.typeName.toLowerCase()==="frozen burritos"))?.aisleLocation}</td>
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
          <td>Family Meals</td>
          <td>{foodItems?.find(familyMealsItem=>(familyMealsItem.typeName.toLowerCase()==="frozen family meals"))?.aisleLocation}</td>
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
          <td>Vegetables</td>
          <td>{foodItems?.find(vegetableItems=>(vegetableItems.typeName.toLowerCase()==="frozen vegetables"))?.aisleLocation}</td>
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
          <td>Meats</td>
          <td>{foodItems?.find(meatItem=>(meatItem.typeName.toLowerCase()==="frozen meats"))?.aisleLocation}</td>
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
          <td>Tomatoes</td>
          <td>{foodItems?.find(tomatosItem=>(tomatosItem.typeName.toLowerCase()==="canned tomatoes"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(beansItem=>(beansItem.typeName.toLowerCase()==="canned beans"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(peasItem=>(peasItem.typeName.toLowerCase()==="canned peas"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(peachesItem=>(peachesItem.typeName.toLowerCase()==="canned peaches"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(tunaItems=>(tunaItems.typeName.toLowerCase()==="canned tuna"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(chiliItem=>(chiliItem.typeName.toLowerCase()==="canned chili"))?.aisleLocation}</td>
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
          <td>{foodItems?.find(soupItem=>(soupItem.typeName.toLowerCase()==="canned soup"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(papertowelItem=>(papertowelItem.typeName.toLowerCase()==="paper towels"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(napkinItem=>(napkinItem.typeName.toLowerCase()==="napkins"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(rubbergloveItem=>(rubbergloveItem.typeName.toLowerCase()==="rubber gloves"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(spongeItem=>(spongeItem.typeName.toLowerCase()==="sponges"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(detergentItem=>(detergentItem.typeName.toLowerCase()==="detergent"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(fabricItem=>(fabricItem.typeName.toLowerCase()==="fabric softener"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(cleanerItem=>(cleanerItem.typeName.toLowerCase()==="cleaners"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(garbageItem=>(garbageItem.typeName.toLowerCase()==="garbage bags"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(toiletPaperItem=>(toiletPaperItem.typeName.toLowerCase()==="toilet paper"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(broomsItem=>(broomsItem.typeName.toLowerCase()==="brooms and mops"))?.aisleLocation}</td>
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
          <td>{houseItems?.find(hairsItems=>(hairsItems.typeName.toLowerCase()==="hair products"))?.aisleLocation}</td>
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
          <td>{houseItems?.find(coldItems=>(coldItems.typeName.toLowerCase()==="cold and flu"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(painItem=>(painItem.typeName.toLowerCase()==="pain medication"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(contraceptionItem=>(contraceptionItem.typeName.toLowerCase()==="contraception"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(formulaItem=>(formulaItem.typeName.toLowerCase()==="baby formula"))?.aisleLocation}</td>
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
        <td>{houseItems?.find(diapersItem=>(diapersItem.typeName.toLowerCase()==="baby diapers"))?.aisleLocation}</td>
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

export default StoreTable;
