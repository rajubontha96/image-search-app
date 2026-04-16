import './index.css'

const Modal = ({image, onClose}) => {
  return (
    <div className="modal" onClick={onClose}>
      <img src={image.urls.regular} alt="" />
      <p>{image.user.name}</p>
    </div>
  )
}

export default Modal