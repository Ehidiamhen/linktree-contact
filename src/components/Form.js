import React from 'react'
import '../CSS/Style.css'

const Input = props => {
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

export { Input, Textarea, Checkbox, Button }