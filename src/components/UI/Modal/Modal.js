import React from 'react'
import "./Modal.scss"

const Modal = ({ isOpen, setOpen, children }) => (
    isOpen ?
    <>
        <div className="backdrop" onClick={() => setOpen(false)} />
        <div className="modal">
            <div className="modal__inner">
                <div className="modal__content">{children}</div>
            </div>
        </div>
    </> : null
)

export default Modal