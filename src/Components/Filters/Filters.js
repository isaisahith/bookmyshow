import React from 'react'
import { Search } from './Search/Search'
import { FilterByLanguage } from './FilterByLanguage/FilterByLanguage'
import './Filters.css'

export const Filters = (props) => {

  const {setSearch, handleLanguage} = props;
  

  
  return (
    <div className='filters-container'>
        <Search setSearch={setSearch} />
        <FilterByLanguage handleLanguage={handleLanguage}/>
    </div>
  )
}
