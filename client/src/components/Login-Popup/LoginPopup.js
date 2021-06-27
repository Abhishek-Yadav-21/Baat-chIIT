import React from 'react';
import './LoginPopup.css';
import { Button,  Icon, Modal, TransitionablePortal } from 'semantic-ui-react';
import Google from './Assets/Google.svg';
import Close from './Assets/Vector.svg';
import Yo from './Assets/yo.svg';


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

const LoginPopup = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
      
      <Button id={props.id} onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        {props.name}
      </Button>
      
      <TransitionablePortal open={open}  transition={{ animation:'scale', duration: 300 }}>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
        id="my"
      >
        <Modal.Content>
        <Button id="close-modal" negative onClick={() => dispatch({ type: 'close' })}>
            <img id="close" src={Close}/>
        </Button>
        <h4 className="ui header">Awesome<img id="yo" src={Yo} /></h4>
        <p id="text">By registering you agree to our terms and services and our privacy policy.</p>
        <a id="modal-login-google" name="login google" href="/auth/google" className="ui button icon-box google" role="button"><img id="logo" src={Google} />Continue with GSuite ID</a>
        <h6 className="bottom-notice">{props.text} <a href="/auth/google"><span>{props.link}</span></a></h6>
        </Modal.Content>
      </Modal>
      </TransitionablePortal>
    </>
   
  )
}
export default LoginPopup;