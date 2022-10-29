import React from 'react'

const LinkButton = props => {
    const {
        name, 
        title,
        link
    } = props
    return (
        <div>
            <h3>{title}</h3>
          <Button href={link}>{name}</Button>  
        </div>
    )
}

export default LinkButton