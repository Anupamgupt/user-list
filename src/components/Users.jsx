import React,{useState} from 'react'
import UserCard from './UserCard'
import './user.css'
import UserProfile from './UserProfile'


function Users({userList}) {
  const [profileItem,setProfileItem]=useState(userList[0])
  const [selected,setSelected]=useState(profileItem)
  
  const handleClick=(item)=>{
    setProfileItem(item)
    setSelected(item)
  }

  return (
    <div className='userss'>
      <div className='user-list'>
        <h1>User list</h1>
        <div className='user'>  
          {userList.map((item)=>(
            <UserCard item={item} key={item.id} click={()=>handleClick(item)} selected={selected} />
          ))}
          
        </div>
      </div>
     
      <div className='r' >
            
          <UserProfile profileItem={profileItem}/>
      </div>
    </div>
   
  )
}

export default Users