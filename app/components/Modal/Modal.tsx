'use client'

import { FormEvent, Fragment, useState } from 'react'
// @components
import { Dialog, Transition } from '@headlessui/react'
import { FormBtn, FormInput, Spinner } from '@components'
import Image from 'next/image'
// @styles
import * as _ from '@assets/styles'
// @globals, @constants & @assets
import { ASSET } from '@config'
import { SNACKS, CONTENT } from '@constants'
import { toast } from 'react-toastify'
// @interfaces
import { ModalProps } from '@interfaces/components'
import { addEmailToProduct } from '@lib/actions'

const Modal = ({ productId }: ModalProps) => {
  let [isOpen, setIsOpen] = useState(true)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await addEmailToProduct(productId, email)
      toast.success(SNACKS.email.sent)
    } catch (error: any) {
      toast.error(error)
    }

    setIsSubmitting(false)
    setEmail('')
    handleClose()
  }

  return (
    <>
      <button type='button' className={_.def.StyledBtn} onClick={handleOpen}>
        {CONTENT.dialog.btn}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          onClose={handleClose}
          className={_.modal.StyledContainerDiv}
        >
          <div className={_.modal.StyledCenteredDiv}>
            <Transition.Child {..._.ANIMATE.dialog}>
              <Dialog.Overlay className={_.modal.StyledDialogOverlay} />
            </Transition.Child>
            <span className={_.modal.StyledSpan} aria-hidden='true' />
            <Transition.Child {..._.ANIMATE.dialog_2}>
              <div className={_.modal.StyledDialog}>
                <div className={_.modal.StyledWrapperDiv}>
                  <div className={_.modal.StyledDiv}>
                    <div className={_.modal.StyledLogoWrapper}>
                      <Image {...ASSET.logo(28, 28)} />
                    </div>
                    <Image {...ASSET.close({ w: 20, h: 20 }, handleClose)} />
                  </div>
                  <h2 className={_.modal.StyledHeadTextH2}>
                    {CONTENT.dialog.head}
                  </h2>
                  <p className={_.modal.StyledTextP}>{CONTENT.dialog.p}</p>
                </div>
                <form
                  className={_.modal.StyledWrapperForm}
                  onSubmit={handleSubmit}
                >
                  <FormInput
                    {...CONTENT.form.email}
                    value={email}
                    setChange={setEmail}
                  />
                  <FormBtn {...CONTENT.form.btn_track} loading={isSubmitting} />
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
