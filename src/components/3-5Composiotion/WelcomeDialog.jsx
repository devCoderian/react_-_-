import React from 'react'
import CustomDialog from './CustomDialog'
import Dialog from './Dialog'
export default function WelcomeDialog() {
    return (
        <>
        <Dialog name = {'확인'} >
            <h1>Welcome</h1>
            <h1>Thank you!</h1>
        </Dialog>
        <CustomDialog tilte = "Welcome" description = "Thanks" />
        </>
    )
}
