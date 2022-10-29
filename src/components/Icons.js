import React from 'react'
import slack from '../slack.png'
import github from '../github.png'

const Slack = () => {
    return (
        <a href='https://hng9.slack.com' target='_blank'><img src={slack} alt='profile'/></a>
    )
}

const Github = () => {
    return (
        <a href='https://Github.com/ehidiamhen' target='_blank'><img src={github} alt='profile'/></a>
    )
}

export {Slack, Github}