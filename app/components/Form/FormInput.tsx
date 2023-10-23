'use client'

// @components
import Image from 'next/image'
// @globals
import { ASSET } from '@config'
// @constants
import { CONTENT } from '@constants'
// @styles
import * as _ from '@assets/styles'
// @interface
import { FormInput } from '@interfaces/components'

const Input = ({ icon, type, label, value, setChange }: FormInput) => {
  return (
    <>
      <label htmlFor={type} className={_.modal.StyledLabel}>
        {label}
      </label>
      <div className={_.form.StyledFormContainerDiv}>
        <Image {...ASSET.form(icon)} />
        <input
          required
          type={type}
          id={type}
          placeholder={label}
          className={_.form.StyledFormInput}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
      </div>
    </>
  )
}

export default Input
