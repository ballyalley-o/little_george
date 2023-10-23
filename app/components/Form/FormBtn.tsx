'use client'

import * as _ from '@assets/styles'
// @interface
import { FormBtn } from '@interfaces/components'

const FormBtn = ({ type, label, loading }: FormBtn) => {
  const labelLoading = label + 'ing...'
  return (
    <>
      <button type={type} className={_.form.StyledFormBtn}>
        {loading ? labelLoading : label}
      </button>
    </>
  )
}

export default FormBtn
