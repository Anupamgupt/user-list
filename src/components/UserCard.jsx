import React from 'react'
import avatar from '../assets/avatar.jpg'

import './userCard.css'

function UserCard({item,click,selected}) {
  
  
  return (
    <div className='usercard' onClick={click} style={{
      backgroundColor:selected===item?'rgb(201, 80, 80)':
      '#1f1f1f'
    }}>
        <div className='imgcont'>
            <img src={avatar} className='avatar' alt='img'/>
        </div>
        <div className='detail'>
          <h3 className='name'>@{item.profile.username}</h3>
          <h4 className='job'>{item.jobTitle}</h4>
        </div>
        
        <button className='btn'>View Profile</button>
    </div>
  )
}

export default UserCard