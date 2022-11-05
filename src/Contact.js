import React from "react";
import './CSS/Contact.css'
import Footer from './Footer.js'
import Header from './components/Contact-head.js'
import { Name, Email, Textarea, Checkbox, Button } from './components/Form.js'

const name = 'Ehidiamhen'

const Contact = () => {
    return (
      <>
        <div id='container'>
          <Header />
          <Email
          />
        </div>
        <Footer />
        </>
    )
}
export default Contact