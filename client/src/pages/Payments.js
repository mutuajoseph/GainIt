import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import '../App.css'

const Payments = () => {
    return (
        <Container>
            <Sidebar />
            <main className="main-content">
                Payments page
            </main>
        </Container>
    )
}

export default Payments

const Container = styled.div`
    display: flex;
`