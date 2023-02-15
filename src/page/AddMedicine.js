import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';

const AddMedicine = () => {
    
    const navigate = useNavigate()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const medicine = {
          id : new Date().getTime(),
          name : event.target.name.value,
          price : event.target.price.value,
          quantity : event.target.quantity.value,
          updatedAt : new Date().getTime()
        }
    
        if(localStorage.getItem('medicinedata')){
          const data = JSON.parse(localStorage.getItem('medicinedata'))
          data.push(medicine)
          localStorage.setItem("medicinedata",JSON.stringify(data))
        }
        else {
          const medicineArray = JSON.stringify([medicine])
          localStorage.setItem('medicinedata',medicineArray)
        }
          navigate('/medicine')
    };

  return (
    <div>
         <div>
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Add Medicine</h2>
          </div>
          <Form onSubmit={onSubmitHandler} className="card p-4 col-md-4 mx-auto">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Name"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control    name="price" type="number" placeholder="Enter Price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Quantity"
              name="quantity"
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
          <Button className="me-2" variant="secondary">
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </div>
        </Form>
        </div>
      </section>
    </div>
    </div>
  )
}

export default AddMedicine