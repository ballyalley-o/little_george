'use client'

import { Fragment, useState } from 'react'
// @components
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
// @globals & @assets
import { ASSET } from '@config'

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <button type='button' className='btn' onClick={handleOpen}>
        Track
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' onClose={handleClose} className='dialog-container'>
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            />
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='dialog-content'>
                <div className='flex flex-col'>
                  <div className='flex justify-between'>
                    <div className='p-3 border border-gray-200 rounded-10'>
                      <Image {...ASSET.logo(28, 28)} />
                    </div>
                    <Image {...ASSET.close({ w: 20, h: 20 }, handleClose)} />
                  </div>
                  <h2 className='dialog-head_text my-5'>
                    Keep updated with this Product's Price activity
                  </h2>
                  <p className='text-sm text-gray-600 mt02'>
                    Register your email-address below
                  </p>
                </div>
                <form action='' className='flex flex-col mt-5'>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium text-gray-700'
                  >
                    Email Address
                  </label>
                  <div className='dialog-input_container'>
                    <Image {...ASSET.mail} />
                    <input
                      type='email'
                      id='email'
                      placeholder='E-mail Address'
                      className='dialog-input'
                      required
                    />
                  </div>
                  <button type='submit' className='dialog-btn'>
                    Track
                  </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
