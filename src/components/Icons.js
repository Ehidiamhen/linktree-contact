import React from 'react'
import { RWebShare } from 'react-web-share'
import slack from '../icons/slack.png'
import github from '../icons/github.png'
import share from '../icons/share_web.png'
import kebab from '../icons/share_mobile.png'

const Share = () => {
return (
    <RWebShare
              data={{
                  text: "Ehidiamhen",
                  url: window.location.href,
                  title: "Link Tree Page By Aigbiluese Ehidiamhen - HNGi9 Stage 1 Task",
              }}
              onClick={() => console.log("shared successfully!")}
              >
                  <a rel='noreferrer' target='_blank' id='share'><img src={share} alt='share'/></a>
    </RWebShare>
)
} 

const Kebab = () => {
    return (
        <a rel='noreferrer' href='' id='kebab'><img src={kebab} alt='share'/></a>
    )
}
const Slack = () => {
    return (
        <a rel='noreferrer' href='https://hng9.slack.com' target='_blank' className='slack-git'><img src={slack} alt='slack'/></a>
    )
    }
const Github = () => {
    return (
        <a rel='noreferrer' href='https://Github.com/ehidiamhen' target='_blank' className='slack-git'><img src={github} alt='github'/></a>
    )
}
export {Share, Kebab, Slack, Github}