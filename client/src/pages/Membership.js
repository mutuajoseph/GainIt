import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import '../App.css'

const Membership = () => {
    return (
        <Container>
            <Sidebar />
            <main className="main-content">
                Membership page
            </main>
        </Container>
    )
}

export default Membership

const Container = styled.div`
    display: flex;
`