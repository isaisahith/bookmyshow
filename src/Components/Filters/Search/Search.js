import React, { useEffect, useState } from 'react'

export const Search = ({setSearch}) => {


  const [searchVal, setSearchVal]= useState('');

  useEffect(()=>{
      setSearch(searchVal)
  },[searchVal])

  
  return (
    <div>
      <input type='text' placeholder='Search movie' onChange={e=>setSearchVal(e.target.value)} value={searchVal}/>
    </div>
  )
}
