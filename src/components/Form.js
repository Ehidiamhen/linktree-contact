import React, { useState } from 'react'
import '../CSS/Style.css'

const name = 'Ehidiamhen'

const Name = props => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

 
    const {
        id,
        className,
        placeholder,
        label,
        fore,
        type,
    } = props
    return (
        <>
          <form id={id} className={className}>
            <label for={fore}>{label}<br></br></label>
            <input id={id} className={className} type={type} placeholder={placeholder} required></input>
          </form>
        </>
    )
}

const Email = () => {

    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')

    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')

    const [successMsg, setSuccessMsg] = useState('')


    const handleFirstNameChange = (e) => {
        setFirstNameError('')
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastNameError('')
        setLastName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setSuccessMsg('')
        setEmailError('')
        setEmail(e.target.value)
    }
    
    const handleMessageChange = (e) => {
        setMessageError('')
        setMessage(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(firstName === ''){
            setFirstNameError('First name required')
        } 

        if(lastName === ''){
            setLastNameError('Last name required')
        }

        if(email !== '') {
            if(email.includes('@')) {
                setSuccessMsg('Message Sent!')
            }
            else{
                setEmailError('Enter a valid email address')
            }
        }
        else {
            setEmailError('Email required')
        }

        if(message !== '') {
            if(message.length < 30){
                setMessageError('Message must be more than 30 characters')
            }
        } 
        else {
            setMessageError('Message field required')
        }
    }
 
    return (
        <>
          <form id='email' className='input-email' onSubmit={handleFormSubmit}>
            <div className='input-name'>
                <div>
                  <label for='text'>First name<br></br></label>
                  <input id='fname' className='input-name' type='text' placeholder='Enter your first name'
                  onChange={handleFirstNameChange} value={firstName}></input>
                  {firstNameError&&<div className='error-msg'>{firstNameError}</div>}
                </div>
                <div>
                  <label for='text'>Last name<br></br></label>
                  <input id='lname' className='input-name' type='text' placeholder='Enter your last name'
                  onChange={handleLastNameChange} value={lastName}></input>
                  {lastNameError&&<div className='error-msg'>{lastNameError}</div>}
                </div>
            </div>

            <label for='email'>Email<br></br></label>
            <input  type='text' placeholder='yourname@example.com'
            onChange={handleEmailChange} value={email}></input>
            {emailError&&<div className='error-msg'>{emailError}</div>}

            <label for='text'>Message<br></br></label>
            <textarea placeholder='Send me a message and I’ll reply you as soon as possible'
            onChange={handleMessageChange} value={message}></textarea>
            {messageError&&<div className='error-msg'>{messageError}</div>}

            <div  className='checkbox'>
              <input type='checkbox'id='checkbox' required></input>
              <label for='text'>{`You agree to providing your data to ${name} who may contact you.`}<br></br></label>
            </div>

            <input id='button' className='submit' type='submit' value='Send message'></input>
          </form>
          {successMsg&&<div className='success'>{successMsg}</div>}
        </>
    )
}

const Textarea = props => {
    const {
        id,
        className,
        placeholder,
        label,
        fore,
    } = props
    return (
        <form id={id} className={className}>
          <label for={fore}>{label}<br></br></label>
          <textarea placeholder={placeholder} required></textarea>
        </form>
    )
}

const Checkbox = props => {
    const {
        id,
        className,
        type,
        label,
        fore,
    } = props
    return (
        <form id={id} className={className}>
            <input type={type}></input>
            <label for={fore}>{label}<br></br></label>
        </form>
    )
}

const Button = props => {
    const {
        id,
        className,
        type,
        value,
    } = props
    return (
        <form>
            <input id={id} className={className} type={type} value={value} required></input>
        </form>
    )
}

export {Name, Email, Textarea, Checkbox, Button}