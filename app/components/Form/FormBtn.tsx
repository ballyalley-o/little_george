'use client'

import * as _ from '@assets/styles'
// @component
import { Spinner } from '@components'
// @interface
import { FormBtn } from '@interfaces/components'

const FormBtn = ({ type, label, loading }: FormBtn) => {
  return (
    <>
      <button type={type} className={_.form.StyledFormBtn}>
        {loading ? <Spinner /> : label}
      </button>
    </>
  )
}

export default FormBtn
