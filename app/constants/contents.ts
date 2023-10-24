import * as _ from '@assets/styles'
// @constants
import { TITLE } from '@constants'

const CONTENT = {
  dialog: {
    head: " Keep updated with this Product's Price activity",
    p: 'Register your email-address below',
    label: 'Email Address',
    btn: 'Track',
  },
  form: {
    email: {
      icon: 'mail',
      label: 'E-mail Address',
      type: 'email',
    },
    btn_track: (isEmail: any) => {
      return {
        type: 'submit',
        label: 'Track',
        className: _.form.StyledFormBtn,
        disabled: true,
      }
    },
    btn_search: {
      type: 'submit',
      className: _.search.StyledSearchBtn,
      label: TITLE.search,
    },
    searchbar: {
      icon: false,
      type: 'text',
      label: 'Enter Product',
      // placeholder: 'Enter Product',
      className: _.search.StyledSearchInput,
    },
  },
}

export default CONTENT
