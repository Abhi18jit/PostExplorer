import React, { useEffect, useState } from 'react'
import Cards from '../layout/Cards'
import { Pagination } from 'flowbite-react';
import { useUserContext } from '../contextStore/UserContext';


const Posts = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsData, setPostsData] = useState([]);
  const{AuthorizationToken,userName,setUserName} = useUserContext();

  const getData=async (pageNo)=>{
    setCurrentPage(pageNo);
    try {
      const response=await fetch(`http://localhost:8000/api/v1/users/posts?page=${pageNo}`,{
          method:"GET",
          headers:{
              Authorization:AuthorizationToken
          }
      });
      const data=await response.json();
      if(response.ok){
        console.log(data.data);
          setPostsData(data.data.posts);
          setUserName(data.data.username);

      }
  } catch (error) {
      console.log("Error",error);
  }
  }
  useEffect(()=>{
    getData(1);
  },[]);

  return (
    <>
    <section className='min-h-[80vh] w-[80vw]'>
      <h1></h1>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-4 gap-5 p-5">
      {postsData.map((ele,index)=>(
        <Cards  key={index} ele={ele}/>
      ))}

      </div>
      
      <div className="flex overflow-x-auto sm:justify-center ">
      <Pagination  currentPage={currentPage} totalPages={4} onPageChange={getData}/>
    </div>

      </section>
    </>
  )
}

export default Posts
