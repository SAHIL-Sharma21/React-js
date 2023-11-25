import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

  //using useLoaderData hook from react router dom it will contai data
  const data = useLoaderData();



    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     //fetching data from github api and using use state to set the data in ui
    //     fetch('https://api.github.com/users/SAHIL-Sharma21')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }, []);
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.following}
        <img src={data.avatar_url} alt="profile pic" width={300} />
        </div>
        
    </>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response =  await fetch('https://api.github.com/users/SAHIL-Sharma21')
  return response.json();
}