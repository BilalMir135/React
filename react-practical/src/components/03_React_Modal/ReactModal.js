import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
export default function ReactModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: { backgroundColor: 'grey' },
          content: { color: 'red' },
        }}
      >
        <h2>Modal Heading</h2>
        <p>Modal Content</p>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}
