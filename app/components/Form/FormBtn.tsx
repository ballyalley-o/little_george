'use client'

import * as _ from '@assets/styles'
// @interface
import { FormBtn } from '@interfaces/components'

const FormBtn = ({ type, label, loading, disabled, className }: FormBtn) => {
  const labelLoading = label + 'ing...'
  return (
    <>
      <button type={type} className={className} disabled={disabled}>
        {loading ? labelLoading : label}
      </button>
    </>
  )
}

export default FormBtn
