import React from 'react'

const LinkButton = props => {
    const {
        name, 
        link
    } = props
    return (
        <div>
          <a href={link}>{name}</a>  
        </div>
    )
}

export default LinkButton