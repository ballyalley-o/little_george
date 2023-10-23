import { Fragment } from 'react'

const ANIMATE = {
  dialog: {
    as: Fragment,
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in duration-100',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  dialog_2: {
    as: Fragment,
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'ease-in duration-200',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95',
  },
}

export default ANIMATE
