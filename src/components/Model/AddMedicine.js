import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddMedicine = ({ display, setDisplay }) => {
  const handleClose = () => setDisplay(false);


  const onSubmitHandler = (event) => {
      event.preventDefault()
      const medicine = {
        id : new Date().getTime(),
        name : event.target.name.value,
        price : event.target.price.value,
        quantity : event.target.quantity.value
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

      setDisplay(false)

  };

  return (
    <Modal show={display} onHide={handleClose}>
      <Modal.Header closeButton={true}>
        <Modal.Title>Add Medicine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control name="price" type="number" placeholder="Enter Price" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Quantity"
              autoFocus
              name="quantity"
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
          <Button className="me-2" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddMedicine;
