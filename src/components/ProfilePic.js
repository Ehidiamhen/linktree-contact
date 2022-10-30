import React from 'react'
import profile from '../profile.jpg'

const ProfilePic = props => {
    const {
        id,
        className
    } = props
    return (
        <img id={id} src={profile} alt='profile' className={className}/>
    )
}

export default ProfilePic