import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Details.css'



const Details = () => {

  const [logindata, setLoginData] = useState([]);
  console.log(logindata)

  const Data = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser)
      setLoginData(user);

      const userdata = logindata.map((element, key) => {
        return element.email === Data && element.name === Data
      });
      if (userdata) {
        console.log('ok');

      }
    }
  }


  const history = useNavigate();
 const userlogout = () => {
    localStorage.removeItem("")
    history("/");
  }
  useEffect(() => {
    Data();
  }, [])

  const deleteItem = () => {
  setLoginData([])
};
  
//const [show, setShow] = useState(false);
//const handleShow = () => setShow(true);

//const handleClose = () => setShow(false);






  return (

    <>

      {  
      logindata.length === 0 ? 'error' :
        <>
          
          <h1>You are succesfully logged In  </h1>
          <div>

            <br></br>
            <div className='table'>
              <table border='1'>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                 </tr>
                <tr>
                  <td>
                    {logindata[0].name}
                  </td>
                  <td>
                     {logindata[0].email}
                  </td>
                  <td>
                  <button onClick={deleteItem}><AiFillDelete/></button>
                  </td>
                 {/* <button onClick={() => handleShow()}>
                    <AiFillEdit /></button> <p></p>
                  <>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                      </Modal.Header>
                      <Modal.Body>
                      <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Login Information</Form.Label>
              <Form.Control  
                type="email"
                placeholder="name@gmail.com"
              autoFocus/>
            </Form.Group>
            </Form>
          </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                      
                        <Button onClick={handleClose}><AiFillEdit/></Button>
                       
                      </Modal.Footer>
                    </Modal>
      </>*/}
                   </tr>
              </table>
            </div>  
          </div>

        </>
      }
      <br></br>
      <Button onClick={userlogout} >LogOut</Button>
     </>
  )
}

export default Details

