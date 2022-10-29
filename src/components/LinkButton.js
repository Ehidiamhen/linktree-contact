import React from 'react'

const LinkButton = props => {
    const {
        logo,
        name, 
        link
    } = props
    return (
        <div>
          <a href={link} target='_blank'>{logo}{name}</a>  
        </div>
    )
}

export default LinkButton