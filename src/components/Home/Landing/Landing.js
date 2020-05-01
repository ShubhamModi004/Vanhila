import React from 'react'

// Import Landing styles
import {
    Container,
    LandingHeader,
    LandingDescription,
    ContactWithus,
    LineContact,
    LandingBottom,
    SocialHandleContainter,
    ScrollBox,
    ScrollDot,
    LineVertical,
    ScrollContainer,
    SocialContainer
} from './Landing.styles';

// import common styles
import {
    WhiteButton
} from '../../common/Styles/styles';


// import svgs 
import ArrowRight from '../../../images/assets/arrow-right.svg';
import linkedin from '../../../images/assets/linkedin.svg';
import facebook from '../../../images/assets/facebook.svg';
import instagram from '../../../images/assets/instagram.svg';
import twitter from '../../../images/assets/twitter.svg';
import behance from '../../../images/assets/behance.svg';
import dribble from '../../../images/assets/dribble.svg';

const Landing = () => {
    return (
        <Container className='container'>
            <LandingHeader style={{ marginTop: '-9rem' }}>Humans who humanise digital products</LandingHeader>
            <LandingDescription>
                Designing experiences for your users and business.
            </LandingDescription>
            <WhiteButton style={{ marginTop: '3rem' }}>
                Let’s create something together
                <img src={ArrowRight} style={{ height: '0.8rem', width: '0.8rem' }} />
            </WhiteButton>
            <LandingBottom>
                <SocialContainer>
                    <ContactWithus>Connect with us</ContactWithus>
                    <LineContact />
                    <SocialHandleContainter>
                        <img src={linkedin} style={{ height: '1rem', width: '1rem' }} />
                        <img src={facebook} style={{ height: '1rem', width: '1rem' }} />
                        <img src={instagram} style={{ height: '1rem', width: '1rem' }} />
                        <img src={twitter} style={{ height: '1rem', width: '1rem' }} />
                        <img src={behance} style={{ height: '1rem', width: '1rem' }} />
                        <img src={dribble} style={{ height: '1rem', width: '1rem' }} />
                    </SocialHandleContainter>
                </SocialContainer>
                <ScrollContainer>
                    <ScrollBox>
                        <ScrollDot />
                    </ScrollBox>
                    <LineVertical />
                    <ContactWithus style={{ textAlign: 'center', marginBottom: '1rem' }}>Scroll</ContactWithus>
                </ScrollContainer>
            </LandingBottom>
        </Container>
    )
}

export default Landing
