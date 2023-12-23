import React, { useState } from 'react';
import { Heading } from "../common/Heading"
import { joinclass } from '../data/dummydata'

export const Joinclass = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);   // Displa a success message or set a flag for showing a message
  };

  const handleReset = () => {
    setSubmitted(false); // Reset the submitted state to false 
  };

  const registrationSuccessfulStyle = {
    position: 'fixed',
    bottom: '3rem',
    /* right: '0.2rem', */
    backgroundColor: '#212222',
    color: '#2d2e2e',  // Text color
    padding: '0.5rem',
    borderRadius: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    zIndex: '999',
    maxWidth: '200px',
  };

  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Welcome To The Kids And Teens Virtual  Holiday Coding TechCamp' />
          <div className='content flexsb'>
            <div className='right'>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className='flex'>
                    <input type="text" name='name' placeholder='Name' data-aos="" required/>
                  </div>
                  <input type='email' name='email' placeholder='Email' data-aos='' />
                  <div className='flex'>
                    <input type='text' name='phonenumber' placeholder='Phonenumber' data-aos='' required />
                    <input type='text' name='age' placeholder='Your Age' data-aos='' />
                  </div>
                  <input type="text" name='country' placeholder='Country of Residence' data-aos="" />
                  <input type='text' name='state' placeholder='State of Residence' data-aos='' />
                  <button type='submit' data-aos=''>Register</button>
                </form>
              ) : (
                <div style={registrationSuccessfulStyle}>
                  <p>Registration Successful</p>
                  <button onClick={handleReset}>
                    Close
                     {/* Optionally reset the form or show additional content */}
                  </button>
                </div>
              )}
            </div>
            <div className='flyer'>
              {joinclass.map((item, index5) => (
                <div className='boxflyer' data-aos='zoom-in-down' key={index5}>   {/* //Adding index as a uniqu key */}
                  <img src={item.flyer} alt='techcamp flyer' height='300px' width='300px' />
                </div>
              ))}
              <Heading title='Account Payment Details' />
              <h3>NGN ACCOUNT:</h3>
              <p>Bank Name: Zenith</p>
              <p>Account Name: Amogo Solomon </p>
              <p>Account number: 2401664892</p>

              <h3>USD ACCOUNT:</h3>
              <p>Bank Name: Zenith</p>
              <p>Account Name: Amogo Solomon </p>
              <p>Account number: 5072006028</p>

              <h3>CRYPTO WALLET ADDRESS(USDT):</h3>
              <p>USDT Wallet Address: 0x5cbd60dd942ffb53faf03146be5990f341ffcec5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 



/* 

import React, { useState } from 'react';
import { Heading } from "../common/Heading"
import { joinclass } from '../data/dummydata'


export const Joinclass = () => {

const [ submitted, setSubmitted] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault();


  setSubmitted(true);
};

const handleReset = () => {
  setSubmitted(false); 
};

const registraionSuccesfulStyle = {
  position: 'fixed',
  bottom: '3rem',
  right: '0.2rem',
  backgroundColor: '#25d366', 
  color: '#e0a80d', 
  borderRadius: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
  zIndex: '999', /
  maxWidth: '200px',
  
  
};

  return (
    <>
      <div className='contact'>

        <div className='container'>
            <Heading title='Welcome To The Kids And Teens Virtual  Holiday Coding TechCamp' />

            <div className='content flexsb'>
                <div className='right'>
                  {!submitted ? ( 
                    <form action="https://getform.io/f/bdf08e2d-8041-4014-84bb-290c6e2c8f9d" method="POST">
                        <div className='flex'>
                            <input type="name" name='name' placeholder='Name' data-aos="" required/> 
                        </div>
                        <input type='email' name='email' placeholder='Email' data-aos='' />
                        <div className='flex'>
                            <input type='phonenumber' name='phonenumber' placeholder='Phonenumber' data-aos='' required />
                            <input type='age' name='age' placeholder='Your Age' data-aos='' />
                        </div>
                            <input type="country" name='country' placeholder='Country of Residance' data-aos="" />
                            <input type='state' name='state' placeholder='State of Resisdence' data-aos='' />
                        <button type='submit' data-aos=''>Register</button>
                    </form>
                    ) : (
                      <div className=''
                      style={registraionSuccesfulStyle}
                      >
                        <p>Registration Successful</p>
                        <button onClick={handleReset}>
                          Close
                        </button>
                        
                        </div>
                    )
                  }
                </div>
                <div className=' flyer'>
                    {joinclass.map((item, index5) => (
                        <div className='boxflyer' data-aos='zoom-in-down' key={index5}>
                             <img src={item.flyer} alt='techcamp flyer' height='300px' width='300px' />
                        </div>
                        
                    ))}
                    <Heading title='Account Payment Details' />
                   
<h7>NGN ACCOUNT:</h7>
<p>Bank Name: Zenith</p>
<p>Account Name: Amogo Solomon </p>
<p>Account number: 2401664892</p>
<p></p>

<h7>USD ACCOUNT:</h7>
<p>Bank Name: Zenith</p>
<p>Account Name: Amogo Solomon </p>
<p>Account number: 5072006028</p>
<p></p>


<h7>CRYPTO WALLET ADDRESS(USDT):</h7>
<p>
USDT Wallet Address: 0x5cbd60dd942ffb53faf03146be5990f341ffcec5
</p>             </div>
            </div>
        </div>
      </div>
    </>
  )
} 
 */



