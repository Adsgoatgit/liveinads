
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { FaArrowRight } from "react-icons/fa";
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import {Rakesh} from './animation';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Home() {

  const [showContainer, setShowContainer] = useState(true);
  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const data=document.querySelector('.data')
      setShowContainer(false);
      data.style.display='block';
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div>
      



    {showContainer&&(
         <div className="animation">

         <div className="logoimage12">
             <div className="circularcontainer1"></div>
             <Image src="/logo.png" height={40} width={180} alt="image" className='logoimagepic'/>
         </div>
         </div>)}
<div className='data'>
<div className='navbar1'>
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top nav">
      <Container className='navmain1'>
        <Navbar.Brand href="#home" className='navbar'>
          <Image src="/group.png" width={40} height={40} className='navimage'/>
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
              Contact Us <Image src="/arrow.png" height={20} width={20}/>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
      <div className='backcontainer' id="home">
        
        <div className='imageconatiner2'>
          <Image src="/photo1.png" className='image1' width={200} height={200} />
        </div>
        <div className='fisrtimageconatiner'>
          <div className='roiconatiner'>
            <h4 className='headroi'>
              For Better ROI
            </h4>
            <h1 className='mainhead'>
              Grow your Online Business with us
            </h1>
            <p>
              Reliable and value-driven marketing agency that works with reputable global brands
            </p>
            <div className='buttoncontainer'>
              <button className='getbutton'><Link href='/contact' className='getintouch'>Get In Touch</Link></button>
              <button className='knowbutton' ><Link href="#knowmore" className='knowmorelink'>Know More</Link></button>
            </div>

          </div>
          <div>
            <div className='imageconatiner1'>
              <Image src="/photo1.png" className='image2' width={300} height={300} alt='image'/>
            </div>
          </div>
        </div>

      </div>
      <div className='planetext' id="knowmore">
        <h2 className='texthead'>
          We are a global marketing agency that combines design expertise with technology and intelligence.
        </h2>
      </div>
      <div className='ourconatianer rowanimation' id="ourservices">
        <h5 className='ourhead'>Our Services</h5>
        <h2 className='ourmainhead'>
          We are the best the choice of Digital Marketing
        </h2>
        <div >
          <div className='row1'>
            <div className='conatainer1'>
              <div className='iconcontainer'>
                <Image src={'/performence.png'} height={20} width={20} className='icon' alt='image'/>
              </div>
              <h5 className='performancehead'>
                Performance Marketing
              </h5>
              <p className='perpara'>Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways.</p>
            </div>
            <div className='conatainer1'>
              <div className='iconcontainer'>
                <Image src={'/media.png'} height={20} width={20} className='icon' alt='image'/>
              </div>
              <h5 className='performancehead'>
                Media Buying
              </h5>
              <p className='perpara'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
            </div>

          
          
            <div className='conatainer1'>
              <div className='iconcontainer'>
                <Image src={'/content.png'} height={20} width={20} className='icon' alt='image'/>
              </div>
              <h5 className='performancehead'>
                Content Marketing
              </h5>
              <p className='perpara'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
            </div>
            </div>
            <div className='row1'>
            <div className='conatainer1'>
              <div className='iconcontainer'>
                <Image src={'/lead.png'} height={20} width={20} className='icon' alt='image'/>
              </div>
              <h5 className='performancehead'>
                Lead Generation
              </h5>
              <p className='perpara'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
            </div>

          
          
            <div className='conatainer1'>
              <div className='iconcontainer'>
                <Image src={'/web.png'} height={20} width={20} className='icon' alt='image'/>
              </div>
              <h5 className='performancehead'>
                Web Development
              </h5>
              <p className='perpara'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
            </div>

            <div className='conatainer1'>
              <div className='iconcontainer'>
                <Image src={'/martech.png'} height={20} width={20} className='icon' alt='image'/>
              </div>
              <h5 className='performancehead'>
                Martech
              </h5>
              <p className='perpara'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
            </div>
        </div>
        </div>
      </div>
      <div className='backcontainer1'>
        <div className='imageconatiner'>
          <Image src="/photo2.png" className='image1' width={200} height={200} alt='image'/>
        </div>
        <div className='fisrtimageconatiner1' id="whychooseus">
          <div className='roiconatiner1'>
            <h4 className='headroi'>
              Why Choose Us?
            </h4>
            <h1 className='mainhead1'>
              We have the best team of marketing experts
            </h1>
            <p className='choosepara'>
              Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways .Advertising and innovation that will help both retailers and affiliates grow.
            </p>
            <div className='numbercontainer'>
              <div className='numbermargin'>
                <h1 className='head450'>450M</h1>
                <p className='salepara'>Sales Growth</p>
              </div>
              <div className='numbermargin'>
                <h1 className='head450'>200M</h1>
                <p className='salepara'>Page Visits</p>
              </div>
              <div className='numbermargin'>
                <h1 className='head450'>90M+</h1>
                <p className='salepara'>Engagements</p>
              </div>
            </div>
          </div>
          <div>
            <div className='imageconatiner1'>
              <Image src="/photo2.png" className='image2' width={300} height={300} alt='image'/>
            </div>
          </div>
        </div>

      </div>
      <div className='testdiv'>
        <h5 className='testhead'>Testimonials</h5>
        <h2 className='trusthead'>
          Trust is built with Consistency
        </h2>
        <p className='testpara'>“Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways  innovation that will help both retailers and affiliates grow their businesses in different ways Advertising and innovation that will help both retailers and affiliates grow.”</p>
        <div className='gopidiv'>
          <div  >
            <h2 className='gopiname'>
              Gopichand Bolloju
            </h2>
            <p className='gopipara'>CEO of Slog Digital</p>
          </div>
          <div>
<Image src="/google1.png" height={40} width={120} className='google' alt='image'/>
          </div>

        </div>
        <hr/>
        <p className='testpara1'>“Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways  innovation that will help both retailers and affiliates grow their businesses in different ways Advertising and innovation that will help both retailers and affiliates grow.”</p>
        <div className='gopidiv'>
          <div >
            <h2 className='gopiname'>
              Gopichand Bolloju
            </h2>
            <p className='gopipara'>CEO of Slog Digital</p>
          </div>
          <div>
          <Image src="/google1.png" height={40} width={120} className='google' alt='image'/>
          </div>
        </div>
      </div>
      <div className='testdiv1'>
      <h5 className='testhead'>Clients</h5>
        <h2 className='trusthead'>
        Over 1k+ Companies worked with us
        </h2>
        <div className='imagesconatainer'>
          <div className='imageiconconatiner'>
            <div className='imageicon'>
              <Image src="/copyai.png" height={30} width={60} className='photoicon' alt='image'/>
            </div>
            <div className='imageicon'>
              <Image src="/airbnb.png" height={30} width={60} className='photoicon' alt='image'/>
            </div>
            <div className='imageicon'>
              <Image src="/dremio.png" height={30} width={60} className='photoicon' alt='image'/>
            </div>
            <div className='imageicon'>
              <Image src="/airbnb.png" height={30} width={60} className='photoicon' alt='image'/>
            </div>
          </div>
          <div className='imageiconconatiner1'>
            <div className='imageicon'>
              <Image src="/google.png" height={30} width={60} className='photoicon' alt='image'/>
            </div>
            <div className='imageicon'>
              <Image src="/airtable.png" height={30} width={60} className='photoicon' alt='image'/>
            </div>
            <div className='imageicon'>
              <Image src="/adobe.png" height={30} width={60} className='photoicon' alt='image'/>
            </div>
            <div className='imageicon'>
              <Image src="/airtable.png" height={30} width={60} className='photoicon' alt='image'/>
            </div>
          </div>
        </div>
      </div>
<div className='lastdiv'>
  <h1 className='lasthead'>
  Let’s create a measurable impact on your business.
  </h1>
  <button className='lastbutton'><Link  href="/contact" style={{textDecoration:"none"}}>Design a Quote  <Image src="/quitarrow.png" height={22} width={25}  alt='image'/></Link></button>
</div>
<div className='footer'>
  <h6 className='footerhead'>
  Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081
  </h6>
  <p className='footerhead'>Contact - 98490278087</p>
</div>
    </div>
    </div>
  )
}

{/* <button className='lastbutton'><Link  href="/contact" style={{textDecoration:"none"}}>Design a Quote  <Image src="/quitarrow.png" height={22} width={25}  alt='image'/></Link></button>
</div>
<div className='footer'>
  <h6 className='footerhead'>
  Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081
  </h6>
  <p className='footerhead'>Contact - 98490278087</p>
</div>
    </div>
    </div> */}
