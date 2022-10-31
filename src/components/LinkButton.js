import React from 'react'
import ReactTooltip from 'react-tooltip'

const LinkButton = props => {
    const {
        logo,
        name, 
        link,
        id,
        className,
        subtext,
    } = props
    return (
          <div className={className} id={id}>
            <a  data-tip data-for={id} href={link} target='_blank' rel='noreferre'>{logo}{name}</a>
          <ReactTooltip id={id} place='bottom' effect='solid'>
            {subtext}
            </ReactTooltip>
          </div>
    )
}

export default LinkButton