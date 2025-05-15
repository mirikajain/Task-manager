import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data}) => {
  
  const role = JSON.parse(localStorage.getItem('loggedInUser'))['role']
  if(role){
    if(role == "admin"){
      var username = role
    }
    else{
      var username = data.firstName
    }
  }
  

  

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    localStorage.setItem('employees', '')
    localStorage.setItem('admin', '')
    
    window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header