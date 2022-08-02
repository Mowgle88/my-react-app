import React, { Dispatch, SetStateAction } from 'react'
import MyInput from './UI/input/MyInput'
import MySelect, { Options } from './UI/select/MySelect'

interface PostFilterProps {
  filter: {sort: string, query: string}, 
  setFilter: Dispatch<SetStateAction<{ sort: string; query: string; }>>
}

export default function PostFilter({filter, setFilter}: PostFilterProps) {
  return (
    <div>
        <MyInput
          type="text"
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="search..."
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sorting by"
          options={[
            {value: 'title',  name: 'by title' },
            {value: 'description',  name: 'by description' },
          ]}
        />
      </div>
  )
}
