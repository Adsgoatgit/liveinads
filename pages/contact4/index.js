"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import React,{useState} from 'react';
import Link from 'next/link';
import Modal from 'react-modal';
import moment from "moment-timezone";
// import Conatct from '../contact/page';


// Style the modal content as needed
const modalStyles = {
  content: {
    width: '50%',
    margin: 'auto',
    // marginTop:"1000px",
    padding: '20px',
  },
};

const today =moment()


export default function Contact4(props){
  // console.log("heyyy",props.lastSelectedValue)

  const { lastSelectedValue } = props;
  // console.log(lastSelectedValue)

    const [clicked, setClicked] = useState(false);
 

    

    // const handleTextClick = () => {
    //   setClicked(true);
      

    // };
    

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const[nameValue,setnameValue]=useState();
    const[emailValue,setemailValue]=useState();
    const[dateValue,setdateValue]=useState();
    const[discriptionValue,setdiscriptionValue]=useState();
    const[companyValue,setcompanyValue]=useState();
    const[numberValue,setnumberValue]=useState();
    const[postData,setpostData]=useState()


    
 
    const closeModal = async() => {
      setModalIsOpen(false);
      try {
        
        if (!postData) {
          
          throw new Error('postData is not defined');
        }
    
        const response = await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postData }),
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const result = await response.json();
        console.log(result);
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
      setnameValue("")
      setemailValue("")
      setdateValue("")
      setdiscriptionValue("")
      setcompanyValue("")
      setnumberValue("")
      setpostData("")
      
    };
    const openModal = async () => {
      if (
        !nameValue ||
        !emailValue ||
        !dateValue ||
        !discriptionValue ||
        !companyValue ||
        !numberValue
      ) {
        alert('Please enter all fields');
        return; 
      }
    
      const isValidName = /^[A-Za-z\s.]+$/.test(nameValue); // Check if nameValue contains only alphabetic characters
      const isValidNumber = /^\d{10}$/.test(numberValue); // Check if numberValue is a string with exactly 10 numeric characters
      const isValidDate = moment(dateValue, "DD-MM-YYYY").isAfter(today);
    
      if (!isValidName || !isValidNumber) {
        alert('Invalid data. Please check your inputs.');
        return; 
      }
    
      setpostData({
        name: nameValue,
        email: emailValue,
        Date: dateValue,
        Discription: discriptionValue,
        Company: companyValue,
        PhoneNumber: numberValue,
      });
      setModalIsOpen(true);
    };
    
    
    
    return(
        <div>
        {/* <Contact lastSelectedValue={props.lastSelectedValue} /> */}
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
        <h2 className='contactmainhead'>Now please fill this questionnaire about your project. Its like a Buzzed quiz</h2>
        <div className='inputdiv'>
            <div  className='fullinputdiv'>
                <div className='fulldiv'>
                    <h6 className='fullname'>Full Name*</h6>
                    <input type='text' placeholder='Enter Your Full Name....' className='inputname' id="name" value={nameValue}
            onChange={(e) => setnameValue(e.target.value)}/>
                </div>
                <div >
                    <h6 className='fullname'>Email Address*</h6>
                    <input type='email' placeholder='enter your email..' className='inputname' id="" value={emailValue}
            onChange={(e) => setemailValue(e.target.value)}/>
                </div>
            </div>
            <div  className='fullinputdiv'>
                <div className='fulldiv'>
                    <h6 className='fullname'>Phone Number *</h6>
                    <input type="number" placeholder='Enter your number...' className='inputname' id="number" value={numberValue}
            onChange={(e) => setnumberValue(e.target.value)}/>
                </div>
                <div >
                    <h6 className='fullname'>Company Name *</h6>
                    <input type='text' placeholder='company name...' className='inputname' id="company" value={companyValue}
            onChange={(e) => setcompanyValue(e.target.value)}/>
                </div>
            </div>
            <div  className='fullinputdiv'>
                <div className='fulldiv'>
                    <h6 className='fullname'>Description*</h6>
                    <input type='text' placeholder='Enter your text here.....' className='inputname' id="discription" value={discriptionValue}
            onChange={(e) => setdiscriptionValue(e.target.value)}/>
                </div>
                <div >
                    <h6 className='fullname'>Your Deadline *</h6>
                    <input type='date' placeholder='22-08-2024' className='inputname' id="date" value={dateValue}
            onChange={(e) => setdateValue(e.target.value)}/>
                </div>
            </div>
        </div>
    </div>
    <div className='contactbuttondiv1'>
        <h3><Link href={"/contact3"}  className='backbutton' ><Image src="/backarrow.png" height={15} width={20} alt='image'/>Back</Link></h3>
       
      <div>
      <button className="contactbutton" onClick={openModal}>
        
          Continue  <Image src="/arrow.png" height={20} width={20} alt='image'/>
        
      </button>
      
     <div className='modelcontainer'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        className="model"
        contentLabel="Example Modal"
      ><div className='modelimage'>
        <Image src="/thankyou.png" width={20} height={20} className='thankyouimage' alt='image'/>
        </div>
        <div className='modeltext'>
        <h2 className='modelhead'>Thank You</h2>
        <p className='modelpara'>Your details has been successfully submitted. Well be in touch with you shortly.</p>
        </div>
       
        <button onClick={closeModal} className='button contactnavbutton' ><Link className='continue' href="/">Save & Close</Link></button>
      </Modal>
      </div>
      </div>
        {/* <button className='contactbutton'><Link className='continue' href="/contact4">Continue</Link></button> */}
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
