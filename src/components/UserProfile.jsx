import React from 'react'
import avatar from '../assets/avatar.jpg'
function UserProfile({profileItem}) {
    // console.log(item)
  return (
    <div className="right">
         <div className='user-profile'>
        <div className='user-details'>User Details</div>
        <div className='ava'>
          <img src={avatar} alt='avatar' className='avat'/>
          <h4 className='h4'>@{profileItem.profile.username}</h4>
        </div>
        <div className='bio'>
          <p className='para'>
            {profileItem.Bio}
          </p>
        </div>
        <div className="details">
            <h3>FullName</h3>
            <h3 className='det'>{profileItem.profile.firstName} {profileItem.profile.lastName}</h3>
            <h3>Jobtitle</h3>
            <h3 className='det'>
              {profileItem.jobTitle}
            </h3>
            <h3>Email</h3>
            <h3 className='det'>
              {profileItem.profile.email}
            </h3>
        </div>
    </div>
    </div>
   
    
  )
}

export default UserProfile