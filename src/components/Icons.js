import React from 'react'
import slack from '../slack.png'
import github from '../github.png'
import share from '../share_web.png'
import kebab from '../share_mobile.png'

const Share = () => {
    return (
        <a href='#' target='_blank' id='share'><img src={share} alt='share'/></a>
    )
}

const Kebab = () => {
    return (
        <a href='#' target='_blank' id='kebab'><img src={kebab} alt='share'/></a>
    )
}

const Slack = () => {
    return (
        <a href='https://hng9.slack.com' target='_blank' className='slack-git'><img src={slack} alt='slack'/></a>
    )
}

const Github = () => {
    return (
        <a href='https://Github.com/ehidiamhen' target='_blank' className='slack-git'><img src={github} alt='github'/></a>
    )
}

export {Share, Kebab, Slack, Github}