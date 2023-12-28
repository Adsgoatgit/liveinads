"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import React,{useState} from 'react';
import Link from 'next/link';

export default function Contact3(){
    const [clicked, setClicked] = useState(false);
    const[inputValue,setinputValue]=useState();

    const handleTextClick = () => {
      setClicked(true);
    };
    const navigateToAnotherPage = () => {
      if (inputValue!=="") {
        
        console.log(inputValue);
        window.location.href = '/contact4';
      } else {
        alert("Select a field before navigating.");
      }
    };
    return(
        <div>
            <div className='navbar1'>
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top ">
      <Container className='navmain'>
        <Navbar.Brand href="#home" className='navbar'>
          <Image src="/group.png" width={40} height={40} className='navimage' alt='image'/>
          <h2 className='liveads'>LiveInAds</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Add your navigation links here */}
          </Nav>
          <Nav>
            
          <Nav.Link href="#home" ><h5 className='navhome'>Home</h5></Nav.Link>
            <Nav.Link href="#ourservices" ><h5 className='navhome'>Services</h5></Nav.Link>
            <Nav.Link href="#whychooseus" ><h5 className='navhome'>About Us</h5></Nav.Link>

            <Nav.Link eventKey={2} href="/contact">
              <button className='button contactnavbutton' >
                Contact Us  <Image src="/arrow.png" height={20} width={20} alt='image'/>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className='contactmain'>
        <h5 className='contacthead'>Brief</h5>
        <h2 className='contactmainhead'>Anything Else you<sup>'</sup>d like to add?</h2>
        <div>
            <div>
            
            <div>
                <input type='text' placeholder="Add your Description" className='inputcontact4' value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}/>
            </div>

            </div>
        </div>
    </div>
    <div className='contactbuttondiv1'>
        <h3><Link href={"/contact2"}  className='backbutton'><Image src="/backarrow.png" height={15} width={20} alt='image'/>Back</Link></h3>
        <button className='contactbutton' onClick={navigateToAnotherPage}>Continue  <Image src="/arrow.png" height={20} width={20} alt='image'/></button>
    </div>
    <div className='footer12'>
    <hr/>
  <h6 className='footerhead'>
  Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081
  </h6>
  <p className='footerhead'>Contact - 98490278087</p>
</div>
        </div>
    )
}