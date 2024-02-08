import React from 'react'
import AppHeader from '../components/master/AppHeader'

export default function AppLayout(props) {
    

    return (
        <div>
            <AppHeader />
            {props.children}
        </div>
    )
}
