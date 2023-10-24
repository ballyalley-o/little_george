'use client'

import { FormEvent, useState } from 'react'
// @components
import { Spinner, FormInput, FormBtn } from '@components'
// @styles
import * as _ from '@assets/styles/searchbar'
// @constants
import { TITLE, SNACKS, CONTENT } from '@constants'
// @assets
import { scrapeAndStoreProduct } from '@lib/actions'
import { toast } from 'react-toastify'
// @utils
import { isAmazonProductValid } from '@utils'

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isLinkValid = isAmazonProductValid(searchPrompt)

    if (!isLinkValid) return toast.error(SNACKS.link.invalid)

    try {
      setIsLoading(true)
      const prod = await scrapeAndStoreProduct(searchPrompt)
      toast.success(SNACKS.link.success)
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className={_.StyledWrapperForm} onSubmit={handleSubmit}>
      <FormInput
        {...CONTENT.form.searchbar}
        value={searchPrompt}
        setChange={setSearchPrompt}
        searchBar
      />
      <FormBtn
        {...CONTENT.form.btn_search}
        loading={isLoading}
        disabled={searchPrompt === ''}
      />
    </form>
  )
}

export default SearchBar
