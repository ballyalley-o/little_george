'use client'

import { FormEvent, useState } from 'react'
// @components
import { Spinner } from '@components'
// @constants
import { TITLE } from '@constants'
// @assets
import { toast } from 'react-toastify'
// @utils
import { isAmazonProductValid } from '@utils'

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isLinkValid = isAmazonProductValid(searchPrompt)

    if (!isLinkValid) return toast.error('Provide a Valid Link')

    try {
      setIsLoading(true)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
      <input
        type='text'
        value={searchPrompt}
        placeholder='Enter Product'
        className='searchbar-input'
        onChange={(e: any) => setSearchPrompt(e.target.value)}
      />
      <button
        type='submit'
        className='searchbar-btn'
        disabled={searchPrompt === ''}
      >
        {isLoading ? <Spinner /> : TITLE.search}
      </button>
    </form>
  )
}

export default SearchBar
