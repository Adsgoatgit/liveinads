"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import Contact4 from "../contact4"
import { useRouter } from 'next/navigation';



export default function Contact(){
  const [clicked, setClicked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
 
  const router = useRouter();
  

  const handleTextClick = (value) => {
    setClicked(true);
    setSelectedOptions([...selectedOptions, value]);
  };
  
  const navigateToAnotherPage = () => {
    if (selectedOptions.length > 0) {
      const lastSelectedValue = selectedOptions[selectedOptions.length - 1];
      console.log(lastSelectedValue);
      window.location.href = '/contact1';
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
                Contact Us <Image src="/arrow.png" height={20} width={20} alt='image'/>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className='contactmain'>
        <h5 className='contacthead'>Contact us</h5>
        <h2 className='contactmainhead'>Hi there. What can we help you with </h2>
        <div>
            <div>
            <div className='radiobuttondiv1'>
            <span className={`container1 ${clicked ? 'clicked' : ''}`}>
          <label className='radiodiv'>
            <input
              type="radio"
              name="project"
              className='radiobutton'
              onClick={() => handleTextClick('Start a project')}
            />
            <span className='span'>
              <h6 className='radiohead'>Start a project</h6>
            </span>
          </label>
        </span>
    <span className='span container1'>
        <label className='radiodiv'>
            <input type="radio" name="project" className='radiobutton' value="join the team"  onClick={() => handleTextClick('join the team')}/>
           <h6 className='radiohead'> join the team</h6>
        </label>
    </span >
    <span  className='span container1'>
        <label className='radiodiv'>
            <input type="radio" name="project"  className='radiobutton'  onClick={() => handleTextClick('Drop a quick word')}/>
            <h6 className='radiohead'>Drop a quick word</h6>
        </label>
    </span>
</div>
<div className='radiobuttondiv1'>
<span className="container1 span" >
        <label className='radiodiv'>
            <input type="radio" name="project"  className='radiobutton'  onClick={() => handleTextClick('Apply for a Internship')}/>
            <h6 className='radiohead'>Apply for a Internship</h6>
        </label>
    </span>
    <span className="container1 span" >
        <label className='radiodiv'>
            <input type="radio" name="project" className='radiobutton'   onClick={() => handleTextClick('About Us')}/>
            <h6 className='radiohead'>About Us</h6>
        </label>
    </span>
</div>
            </div>
        </div>
    </div>
    <div className='contactbuttondiv'>
        <h3><Link href={"/"}  className='backbutton'><Image src="/backarrow.png" height={15} width={20} alt='image'/>Back</Link></h3>
        <button className='contactbutton' onClick={navigateToAnotherPage}>Continue  <Image src="/arrow.png" height={20} width={20} alt='image'/></button>
    </div>
    <div className='footer1'>
    <hr/>
  <h6 className='footerhead'>
  Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081
  </h6>
  <p className='footerhead'>Contact - 98490278087</p>
</div>
        </div>
    )
}