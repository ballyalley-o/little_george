import { ToastContainerProps, ToastPosition } from 'react-toastify'
// @config
import { TOAST_POSITION } from '@config'

const TOAST: ToastContainerProps = Object.assign(
  {},
  {
    // position: TOAST_POSITION[0],
    autoClose: Number(2000),
    hideProgressBar: Boolean(true),
    newestOnTop: Boolean(true),
    closeOnClick: Boolean(true),
    rtl: Boolean(false),
    pauseOnFocusLoss: Boolean(false),
    draggable: Boolean(true),
    pauseOnHover: Boolean(true),
  }
)

export default TOAST
