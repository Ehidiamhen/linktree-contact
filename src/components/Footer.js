import React from 'react'
import Ingressive from '../Ingressive.png'

const ZURI = props => {
    const {
        id,
        className
    } = props

    return (
        <div className={className} id={id}>
          <p>Zuri<span></span>Internship</p> 
        </div>
    )
}

const HNG = props => {
    const {
        id,
        className
    } = props

    return (
        <div className={className} id={id}>
          <p>Hng Internship 9 Frontend Task</p>
        </div>
    )
}

const I4G = props => {
    const {
        id,
        className
    } = props

    return (
        <div className={className} id={id}>
          <img src={Ingressive} />
        </div>
    )
}

export {ZURI, HNG, I4G}