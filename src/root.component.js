import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Root(props) {
  return (
        <div>
           <Navbar bg="primary" expand="lg" style={{color:"white",bottom:"0", width:"100%"}}>
             i am the footer
            </Navbar>
        </div>
  );
}
