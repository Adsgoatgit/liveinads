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
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import axios from 'axios';



const modalStyles = {
  content: {
    width: '50%',
    margin: 'auto',
    padding: '20px',
  },
};

const today =moment()


export default function Contact4(){
  

  const router=useRouter()


      
    const searchParams = useSearchParams()
 
    const search = searchParams.get('lastValue')
    // console.log(search)
    const search1 = searchParams.get('secondValue')
    // console.log(search1)
    const search2 = searchParams.get('thirdValue')
    // console.log(search2)
    const search3=searchParams.get('fourthValue')
    // console.log(search3)

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const[nameValue,setnameValue]=useState();
    const[emailValue,setemailValue]=useState();
    const[dateValue,setdateValue]=useState();
    const[discriptionValue,setdiscriptionValue]=useState();
    const[companyValue,setcompanyValue]=useState();
    const[numberValue,setnumberValue]=useState();
    const[postData,setpostData]=useState()



  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    if (selectedDate < getCurrentDate()) {
      
      alert('Please select a date from today onward.');
    } else {
      setdateValue(selectedDate);
    }
  };


    const closeModal = async () => {
      setModalIsOpen(false);
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ContactOn: search,
            Project: search1,
            Budget: search2,
            Description: search3,
            name: nameValue,
            email: emailValue,
            Date: dateValue,
            Discription: discriptionValue,
            Company: companyValue,
          }),
        });
    
        const data = await response.json();
        console.log(data)
    
        if (data.success) {
          console.log('Email sent successfully');
        } else {
          console.error('Error sending email:', data.error);
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    
      try {
        if (!postData) {
          throw new Error('postData is not defined');
        }
    
        try {
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
          console.error('Error fetching data:', error);
        }
        // console.log(result);
    
      
        setnameValue("");
        setemailValue("");
        setdateValue("");
        setdiscriptionValue("");
        setcompanyValue("");
        setnumberValue("");
        setpostData("");
    
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    const backclick=()=>{
      router.push(`/contact3?lastValue=${search}&secondValue=${search1}&thirdValue=${search2}`)
    }

    
    const openModal = async () => {
     
      if (
        !search||
        !search1||
        !search2||
        !search3||
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
    
      const isValidName = /^[A-Za-z\s.]+$/.test(nameValue); 
      const isValidNumber = /^\d{10}$/.test(numberValue); 
    
      if (!isValidName || !isValidNumber) {
        alert('Invalid data. Please check your inputs.');
        return; 
      }
    
      setpostData({
        ContactOn:search,
        Project:search1,
        Budget:search2,
        Description:search3,
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
        <h2 className='contactmainhead'>Now please fill this questionnaire about your project. It’s like a Buzzed quiz</h2>
        <div className='inputdiv'>
            <div  className='fullinputdiv'>
                <div className='fulldiv'>
                    <h6 className='fullname'>Full Name*</h6>
                    <input type='text' placeholder='Enter Your Full Name....' className='inputname' id="name" value={nameValue}
            onChange={(e) => setnameValue(e.target.value)}/>
                </div>
                <div >
                    <h6 className='fullname'>Email Address*</h6>
                    <input type='email' placeholder='Enter your email...' className='inputname' id="" value={emailValue}
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
                    <input type='text' placeholder='Company name...' className='inputname' id="company" value={companyValue}
            onChange={(e) => setcompanyValue(e.target.value)}/>
                </div>
            </div>
            <div  className='fullinputdiv'>
                <div className='fulldiv'>
                    <h6 className='fullname'>Description*</h6>
                    <input type='text' placeholder='Enter your text here...' className='inputname' id="discription" value={discriptionValue}
            onChange={(e) => setdiscriptionValue(e.target.value)}/>
                </div>
                <div >
                    <h6 className='fullname'>Your Deadline *</h6>
                    <input type='date' placeholder='22-08-2024' className='inputname' id="date" value={dateValue}
             onChange={handleDateChange}
             min={getCurrentDate()}/>
                </div>
            </div>
        </div>
    </div>
    <div className='contactbuttondiv1'>
        <button  className='backbutton' onClick={backclick}><Image src="/backarrow.png" height={15} width={20} alt='image'/>Back</button>
       
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
        <p className='modelpara'>Your details has been successfully submitted. We’ll be in touch with you shortly.</p>
        </div>
       
        <button onClick={closeModal} className='button contactnavbutton' ><Link className='continue' href="/">Save & Close</Link></button>
      </Modal>
      </div>
      </div>
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
