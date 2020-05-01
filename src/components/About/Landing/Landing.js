import React from 'react'

// Import Landing styles
import {
    Container,
    LandingHeader,
    LandingDescription
} from './Landing.styles';


const Landing = () => {
    return (
        <Container className='container'>
            <LandingHeader>Here to build relations</LandingHeader>
            <LandingDescription>
                We transform your purpose to modern experiences
            </LandingDescription>
        </Container>
    )
}

export default Landing
