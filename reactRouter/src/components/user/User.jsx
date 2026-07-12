import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id}=useParams()
  return (
    <div className='bg-gray-600 text-center px-4 py-4 text-white uppercase'>User: {id}</div>
  )
}

export default User