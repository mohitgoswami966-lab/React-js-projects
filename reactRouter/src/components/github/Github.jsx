import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     // fetch(`https://api.github.com/users/mohitgoswami966-lab`)
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     console.log(data),
    //     //     setData(data)
    //     // })
    // },[])
  return (
    <div className='bg-gray-700 text-white text-3xl p-4 m-4 text-center'>
        Github follower: {data.followers}
        <img src={data.avatar_url} alt="Git pic" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const res=await fetch(`https://api.github.com/users/mohitgoswami966-lab`)
    return res.json()
}