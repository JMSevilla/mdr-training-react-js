import React from 'react'
import { Card, CardContent } from '@mui/material'

export const ControlledCard = (props) => {
    const { children, style } = props

    return (
        <>
            <Card style={style}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </>
    )
}