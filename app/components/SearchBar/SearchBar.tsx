'use client'
// @constants
import { TITLE } from '@constants'

const SearchBar = () => {
  const handleSubmit = () => {}
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter Product'
        className='searchbar-input'
      />
      <button type='submit' className='searchbar-btn'>
        {TITLE.search}
      </button>
    </form>
  )
}

export default SearchBar
