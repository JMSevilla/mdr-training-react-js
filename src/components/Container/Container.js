import React from 'react'
import { Container } from '@mui/material'

export const ControlledContainer = ({style, children}) => {
    return (
        <Container style={style}>
            {children}
        </Container>
    )
}