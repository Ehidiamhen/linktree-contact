import React from 'react'

const LinkButton = props => {
    const {
        logo,
        name, 
        link,
        id,
        className
    } = props
    return (
        <div className={className} id={id}>
          <a href={link} target='_blank'>{logo}{name}</a>  
        </div>
    )
}

export default LinkButton