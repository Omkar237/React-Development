import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    const [okdata, setokData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/omkar237')
        .then((res)=> res.json())
        .then((newdata)=>{
            setokData(newdata)
        })
    }, [])
    return(
        <>
        <div className=" flex flex-col items-center text-center text-3xl py-4 bg-gray-900 pd-4 text-white ">Github Followers: {data.followers}
        <img  className=" w-24 mt-5 rounded-2xl" src= {okdata.avatar_url} alt="omkarimg" />        
        </div>
        </>
    )
}

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response 
}