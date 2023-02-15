import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from 'react-router-dom';

const UpdateMedicine = () => {
    
    const navigate = useNavigate()
    const [ defaultValue , setDefaultValue ] = useState({
      name : '',
      price : '',
      quantity : ''
    })
    const { id } = useParams()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('medicinedata'))


        const filter = data.find((i) => i.id == id)
        setDefaultValue(filter)
    },[])

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const medicine = {
            id : Number(id),
            name : event.target.name.value,
            price : event.target.price.value,
            quantity : event.target.quantity.value,
            updatedAt : new Date().getTime()
          }
    
          const data = JSON.parse(localStorage.getItem('medicinedata'))

          const updatedData = data.map((i) => {    
            if(i.id == id){
              i = medicine
            }        
    
            return i
          })

          console.info("updatedData++ ",updatedData)
    
          localStorage.setItem('medicinedata',JSON.stringify(updatedData))
          navigate('/medicine')
  
    };

  return (
    <div>
         <div>
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Update Medicine</h2>
          </div>
          <Form onSubmit={onSubmitHandler} className="card p-4 col-md-4 mx-auto">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control defaultValue={defaultValue.name}  name="name" type="text" placeholder="Enter Name"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control   defaultValue={defaultValue.price}    name="price" type="number" placeholder="Enter Price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Quantity"
              name="quantity"
              defaultValue={(defaultValue.quantity)}
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

export default UpdateMedicine