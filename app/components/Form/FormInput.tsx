'use client'

// @components
import Image from 'next/image'
// @globals
import { ASSET } from '@config'
// @styles
import * as _ from '@assets/styles'
// @interface
import { FormInput } from '@interfaces/components'

const Input = ({
  icon,
  type,
  label,
  value,
  setChange,
  searchBar,
  className,
}: FormInput) => {
  return (
    <>
      {!searchBar && (
        <label htmlFor={type} className={_.modal.StyledLabel}>
          {label}
        </label>
      )}
      {!searchBar ? (
        <div className={_.form.StyledFormContainerDiv}>
          <Image {...ASSET.form(icon)} />
          <input
            required
            type={type}
            id={type}
            placeholder={label}
            className={className}
            value={value}
            onChange={(e) => setChange(e.target.value)}
          />
        </div>
      ) : (
        <input
          required
          type={type}
          id={type}
          placeholder={label}
          className={className}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
      )}
    </>
  )
}

export default Input
