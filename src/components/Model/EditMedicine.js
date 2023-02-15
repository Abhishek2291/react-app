import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const EditMedicine = ({ display, setDisplay , SelectedData }) => {
  const handleClose = () => setDisplay(false);

  const onSubmitHandler = (event) => {
      event.preventDefault()
      const medicine = {
        id : SelectedData.id,
        name : event.target.name.value,
        price : event.target.price.value,
        quantity : event.target.quantity.value
      }

      const data = JSON.parse(localStorage.getItem('medicinedata'))
      const updatedData = data.map((i) => {

        if(i.id === SelectedData.id){
          i = medicine
        }        

        return i
      })

      localStorage.setItem('medicinedata',JSON.stringify(updatedData))
      setDisplay(false)



  };

  return (
    <Modal show={display} onHide={handleClose}>
      <Modal.Header closeButton={true}>
        <Modal.Title>Edit Medicine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control defaultValue={SelectedData.name} name="name" type="text" placeholder="Enter Name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control defaultValue={SelectedData.price}  name="price" type="number" placeholder="Enter Price" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Quantity"
              autoFocus
              name="quantity"
              defaultValue={SelectedData.quantity}
             
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

export default EditMedicine;
