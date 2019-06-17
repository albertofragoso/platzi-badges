import React from 'react'

import Modal from './Modal'

function DeleteBadgeModal({ modalIsOpen, onClose, onDeleteBadge }) {
  return(
    <Modal modalIsOpen={modalIsOpen} onClose={onClose} >
      <div className="DeleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You are about to delete this badge.</p>  
        <div>
          <button onClick={onDeleteBadge} className="btn btn-danger">Delete</button>
          <button onClick={onClose} className="btn btn-primary">Close</button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteBadgeModal