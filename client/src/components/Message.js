import React, { useState } from 'react'
import { Alert } from '@material-ui/lab'

const Message = ({variant, message}) => {
    const [show, setShow] = useState(true)

    return (
        <>
        {show && 
        <Alert style={{marginTop: '.6rem'}} severity={variant} onClose={() => setShow(false)}>{message}</Alert>
        }
        </>
    )
}

export default Message
