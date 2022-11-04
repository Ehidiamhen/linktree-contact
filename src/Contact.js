import React from "react";
import './CSS/Contact.css'
import Footer from './Footer.js'
import Header from './components/Contact-head.js'
import { Input, Textarea, Checkbox, Button } from './components/Form.js'

const name = 'Ehidiamhen'

const Contact = () => {
    return (
      <>
        <div id='container'>
          <Header />
          <div className='input-name'>
          <Input 
            id='fname'
            className='input-area'
            fore='name'
            label='First name'
            type='text'
            placeholder='Enter your first name'
          />
          <Input 
            id='lname'
            className='input-area'
            fore='name'
            label='Last name'
            type='text'
            placeholder='Enter your last name'
          />
          </div>
          <Input 
            id='email'
            className='input-email'
            fore='email'
            label='Email'
            type='email'
            placeholder='yourname@example.com'
          />
          <Textarea 
            id='message'
            className='message'
            label='Message'
            fore='text'
            placeholder='Send me a message and I’ll reply you as soon as possible'
          />
          <Checkbox 
            id='checkbox'
            className='checkbox'
            type='checkbox'
            for='text'
            label={`You agree to providing your data to ${name} who may contact you.`}
          />
          <Button
            id='button'
            className='submit'
            type='button'
            value='Send message'
          />
        </div>
        <Footer />
        </>
    )
}
export default Contact