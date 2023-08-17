import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./ApplyLoan.module.css";
import { Form, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { applyLoan } from '../../Services/User/API';
import { useState } from 'react';
const ApplyLoan = () => {
  const [form, setForm] = useState({
    
    id: "",
    item_id: "",
    item_description: "",
    item_make: "",
    item_category: "",
    item_valuation: "",
    item_status: "",
    
    
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if(form.id==sessionStorage.getItem("id")){
    applyLoan(form).then((res)=>{
    console.log(form)
    if(res.success == true)
    {
      //sessionStorage.setItem("id",form.id);
      window.location.href = "/dashboard";
    }
    
    else 
    {
     alert("invalid Credentials"); 
    }
    })
  }
   else{
    alert("invalid")
   } 
    
  }

  const handleChange = (event) => {
    console.log(event.target.id + " " + event.target.value);
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });

    console.log(form)
  }
  
  return (
    <div>
      <NavBar />
      <div className={styles.applyLoan}>
        <form className={styles.formContainer}>
        <div className={styles.formHeader}>
            <h2>Apply for Loan</h2>
        </div>
          <Form className={styles.formGroup}>
            <div className={styles.group1}>
              <Form.Group controlId="id">
                <Form.Label>Employee ID:</Form.Label>
                <Form.Control
                  autocomplete="off"
                  type="text"
                  placeholder="Employee ID"
                  name="Employee ID:"
                  value={form.id} 
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="item_id">
                <Form.Label>Item ID:</Form.Label>
                <Form.Control
                  autocomplete="off"
                  type="text"
                  placeholder="Item ID"
                  name="Item ID:"
                  value={form.item_id} 
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="item_status">
                <Form.Label>Item Status:</Form.Label>
                <Form.Control
                  autocomplete="off"
                  type="text"
                  placeholder="Item Status"
                  name="Item Status:"
                  value={form.item_status} 
                  onChange={handleChange}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="item_description">
                <Form.Label>Item Description:</Form.Label>
                <Form.Control
                  autocomplete="off"
                  type="text"
                  placeholder="Item Description"
                  name="Item Description:"
                  value={form.item_description} onChange={handleChange}
                />
              </Form.Group>
            </div>

            <div className={styles.group2}>
              <Form.Group controlId="item_category" className={styles.dropdown}>
                <Form.Label>Item Category:</Form.Label>
                <select id ="item_category" aria-label="Item Category" value={form.item_category} onChange={handleChange}>
                  <option>Select item category</option>
                  <option value="1">Furniture</option>
                  <option value="2">Electronics</option>
                  <option value="3">Appliances</option>
                </select>
              </Form.Group>
              <br />
              <Form.Group controlId="item_valuation">
                <Form.Label>Item Cost:</Form.Label>
                <Form.Control
                  autocomplete="off"
                  type="text"
                  placeholder="Item Cost:"
                  name="Item Cost"
                  value={form.item_valuation} onChange={handleChange}
                />
              </Form.Group>
            </div>
          </Form>

          <div className={styles.bottomGroup}>
            <Form.Label>Item Make:</Form.Label>
            <select  id ="item_make" aria-label="Item Make" value={form.item_make} onChange={handleChange}>
              <option>Select Item Make</option>
              <option value="1">Wooden</option>
              <option value="2">Steel</option>
              <option value="3">Plastic</option>
            </select>
          </div>
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Apply Loan
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLoan;
