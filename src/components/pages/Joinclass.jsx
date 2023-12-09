import React from 'react'
import { Heading } from "../common/Heading"
import { joinclass } from '../data/dummydata'


export const Joinclass = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
            <Heading title='Kids And Teens Virtual  Holiday Coding TechCamp' />
            <div className='content flexsb'>
                <div className='right'>
                    <form action="https://getform.io/f/bdf08e2d-8041-4014-84bb-290c6e2c8f9d" method="POST">
                        <div className='flex'>
                            <input type="name" name='name' placeholder='Name' data-aos="zoom-in-down" />
                            <input type='email' name='email' placeholder='Email' data-aos='zoom-in-up' />
                        </div>
                        <div className='flex'>
                            <input type='phonenumber' name='phonenumber' placeholder='Phonenumber' data-aos='zoom-in-up' />
                            <input type='age' name='age' placeholder='Your Age' data-aos='zoom-in-up' />
                        </div>
                            <input type="name" name='name' placeholder='Country of Residance' data-aos="zoom-in-down" />
                            <input type='email' name='email' placeholder='State of Resisdence' data-aos='zoom-in-up' />
                        <button type='submit' data-aos=''>Register</button>
                    </form>
                </div>
                <div className=' flyer'>
                    {joinclass.map((item, index5) => ( //Adding index as a uniqu key
                        <div className='boxflyer' data-aos='zoom-in-down' key={index5}>
                             <img src={item.flyer} alt='techcamp flyer' height='300px' width='300px' />
                        </div>
                        
                    ))}
                    <Heading title='Account Payment Details' />
                   
<h7>NGN Account:</h7>
<p>Bank Name: Zenith
Account Name: Amogo Solomon 
Account number: 2401664892</p>

<h7>USD Account:</h7>
<p>Bank Name: Zenith
Account Name: Amogo Solomon 
Account number: 5072006028
</p>

<h7>Crypto Payment(USDT):</h7>
<p>
USDT Wallet Address: 0x5cbd60dd942ffb53faf03146be5990f341ffcec5
</p>             </div>
            </div>
        </div>
      </div>
    </>
  )
}