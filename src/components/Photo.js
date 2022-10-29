import React from 'react'

const ProfilePic = props => {
    const {
        picture
    } = props
    return (
        <img src={picture}/>
    )
}

export default ProfilePic