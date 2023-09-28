interface ModalProps {
  // Header
  showCloseButton: boolean
  // Footer
  showCancelButton: boolean
  cancelButtonLabel: string
  okButtonLabel: string
}

export const Modal = (props: ModalProps) => {
  const {
    showCloseButton = true,
    showCancelButton = true
  } = props
  return (
    <></>
  )
}