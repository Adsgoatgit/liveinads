"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import React,{useState} from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Contact2(){
  const router=useRouter()
  const searchParams = useSearchParams()
 
  const search = searchParams.get('lastValue')
  console.log(search)
  const search1 = searchParams.get('secondValue')
  console.log(search1)
  
    const [clicked, setClicked] = useState(false);

    const backclick=()=>{
      router.push(`/contact1?lastValue=${search}`)
    }

    
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleTextClick = (value) => {
      setClicked(true);
      setSelectedOptions([...selectedOptions, value]);
    };

    const navigateToAnotherPage = () => {
      if (selectedOptions.length > 0) {
        const lastSelectedValue = selectedOptions[selectedOptions.length - 1];
        console.log(lastSelectedValue);
        // window.location.href = '/contact3';
        router.push(`/contact3?lastValue=${search}&secondValue=${search1}&thirdValue=${lastSelectedValue}`)
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
        <h5 className='contacthead'>Budget</h5>
        <h2 className='contactmainhead'>What’s your budget range for this UX & Web Design project?</h2>
        <div>
            <div>
            <div className='radiobuttondiv1'>
    <span className={`container1 ${clicked ? 'clicked' : ''}`}>
      <label className='radiodiv'>
        <input type="radio" name="project"  className='radiobutton'  onClick={() => handleTextClick('20K - 25K')}/>
        <span onClick={handleTextClick} className='span'>
        <h6 className='radiohead'>20K-25K</h6>
        </span>
      </label>
    </span>
    <span className='span container1'>
        <label className='radiodiv'>
            <input type="radio" name="project" className='radiobutton'  onClick={() => handleTextClick('40K - 45K')}/>
           <h6 className='radiohead'>40K-45K</h6>
        </label>
    </span >
    <span  className='span container1'>
        <label className='radiodiv'>
            <input type="radio" name="project"  className='radiobutton'  onClick={() => handleTextClick('60K - 65K')}/>
            <h6 className='radiohead'>60K-65K</h6>
        </label>
    </span>
    <span className="container1 span" >
        <label className='radiodiv'>
            <input type="radio" name="project" className='radiobutton'  onClick={() => handleTextClick("100K -105K")} />
            <h6 className='radiohead'>100K-105K</h6>
        </label>
    </span>
</div>

            </div>
        </div>
    </div>
    <div className='contactbuttondiv1'>
        <button onClick={backclick}  className='backbutton'><Image src="/backarrow.png" height={15} width={20} alt='image'/>Back</button>
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
