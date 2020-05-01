import React from 'react'

// Import Landing styles
import {
    Container,
    FrameworkContainer,
    TeamHeader,
    Overlay
} from './Framework.styles';


const Framework = () => {
    return (
        <Container className='container'>
            <FrameworkContainer>
                <Overlay>
                    <TeamHeader style={{ color: '#fff', marginBottom: '0.7rem' }}>Structured flexibility</TeamHeader>
                    <TeamHeader style={{ color: '#fff', marginBottom: '0.7rem' }}>is our collaboration</TeamHeader>
                    <TeamHeader style={{ color: '#fff', marginBottom: '0.7rem' }}>framework</TeamHeader>
                </Overlay>
            </FrameworkContainer>
            <TeamHeader>Our team is ambitious in transforming your ideas into a polished product.
            We measure our success with what we get to the table for our client’s customers.</TeamHeader>
        </Container>
    )
}

export default Framework
