import React from 'react';
import './LoginPopup.css';
import { Button, Icon, Modal, TransitionablePortal } from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const LoginPopup = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
      
      <Button onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        Sign Up
      </Button>
      
      <TransitionablePortal open={open}  transition={{ animation:'scale', duration: 300 }}>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
        id="my"
      >
        <Modal.Header>Awesome</Modal.Header>
        <Modal.Content>
              <p>By registering you agree to our terms and services and our proivacy policy</p>
        </Modal.Content>
        <Modal.Actions>
          <Button id="button" positive onClick={() => dispatch({ type: 'close' })}>
           <i class="google icon"></i>
           Continue with your GSuite ID
           </Button>
        </Modal.Actions>
      </Modal>
      </TransitionablePortal>
    </>
   
  )
}
export default LoginPopup;
