"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import React,{useReducer, useState} from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Contact1(){
  var router = useRouter();
  
  // const router = typeof window !== 'undefined' ? useRouter() : null;
  // rest of the component code

  // console.log(router)
    const [clicked, setClicked] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleTextClick = (value) => {
      setClicked(true);
      setSelectedOptions([...selectedOptions, value]);
    };
    
    // const navigateToAnotherPage = () => {
    //   const lastSelectedValue1 = String(selectedOptions[selectedOptions.length - 1]);
    //   console.log(lastSelectedValue1)
    //   router.push("/contact2?selectedValue");
    // };
    const navigateToAnotherPage = () => {
      if (selectedOptions.length > 0) {
        const lastSelectedValue = selectedOptions[selectedOptions.length - 1];
        console.log(lastSelectedValue);
        window.location.href = '/contact2';
      } else {
        alert("Select a field before navigating.");
      }
    };
      // const existingQuery = router.query;
      // console.log(existingQuery)
      // router.push(`/contact1?selectedValue=${lastSelectedValue1}`);    
      
   
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
        <h5 className='contacthead'>Start a project</h5>
        <h2 className='contactmainhead'>So you want to work with us? We are pretty #goal-oriented. What can we do for you?</h2>
        <div>
            <div>
            <div className='radiobuttondiv1'>
    <span className={`container1 ${clicked ? 'clicked' : ''}`}>
      <label className='radiodiv'>
        <input type="radio" name="project"  className='radiobutton' onClick={() => handleTextClick('Performance Marketing')}/>
        <span className='span'>
        <h6 className='radiohead'>Performance Marketing</h6>
        </span>
      </label>
    </span>
    <span className='span container1'>
        <label className='radiodiv'>
            <input type="radio" name="project" className='radiobutton' onClick={() => handleTextClick('Media Buying')}/>
           <h6 className='radiohead'>Media Buying</h6>
        </label>
    </span >
    <span  className='span container1'>
        <label className='radiodiv'>
            <input type="radio" name="project"  className='radiobutton'onClick={() => handleTextClick('Web Development')}/>
            <h6 className='radiohead'>Web Development</h6>
        </label>
    </span>
</div>
<div className='radiobuttondiv1'>
<span className="container1 span" >
        <label className='radiodiv'>
            <input type="radio" name="project"  className='radiobutton'onClick={() => handleTextClick('Conatct Marketing')}/>
            <h6 className='radiohead'>Conatct Marketing</h6>
        </label>
    </span>
    <span className="container1 span" >
        <label className='radiodiv'>
            <input type="radio" name="project" className='radiobutton' onClick={() => handleTextClick('Martech')}/>
            <h6 className='radiohead'>Martech</h6>
        </label>
    </span>
    <span className="container1 span" >
        <label className='radiodiv'>
            <input type="radio" name="project" className='radiobutton' onClick={() => handleTextClick('Lead Generation')}/>
            <h6 className='radiohead'>Lead Generation</h6>
        </label>
    </span>
</div>
            </div>
        </div>
    </div>
    <div className='contactbuttondiv1'>
        <h3><Link href={"/contact"}  className='backbutton'><Image src="/backarrow.png" height={15} width={20} alt='image'/>Back</Link></h3>
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