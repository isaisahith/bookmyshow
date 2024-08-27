import React, { useEffect, useState } from 'react'


const languages = ['ALL', 'HINDI', 'ENGLISH', 'TELUGU', 'TAMIL']

export const FilterByLanguage = ({handleLanguage}) => {

  const [language2, setLanguage2] = useState('Tamil');
 
 

  useEffect(()=>{
    handleLanguage(language2)
  },[language2])

  
  return (
    <div>
        <select className='filter-by-language' onChange={e=>setLanguage2(e.target.value)}>

            {languages.map(l=> <option key ={l}>{l}</option>)}
        </select>
    </div>
  )
}
