import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import Header styles
import {
    FooterContainer,
    LogoContainer,
    SiteName,
    Links,
    LinkItem,
    LinkContainer
} from './Footer.styles';

// import common styles
import {
    PurpleButton,
} from '../Styles/styles';

// import svgs
import Whitelogo from '../../../images/assets/Whitelogo.svg';
import ArrowRight from '../../../images/assets/arrow-right.svg'


import Star from '../../../images/assets/Star.svg'

class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <FooterContainer>
                <LogoContainer>
                    <img src={Whitelogo} style={{ height: '5rem', width: '5rem', backfaceVisibility: 'none' }} />
                    <SiteName style={{ letterSpacing: 12, marginTop: 40 }}>VANIHLA</SiteName>
                </LogoContainer>
                <LinkContainer style={{ marginTop: 40 }}>
                    <PurpleButton style={{ marginLeft: 'auto', marginRight: 'auto', border: '0' }}>
                        Hire us
                    <img src={ArrowRight} style={{ height: '0.5rem', width: '0.5rem' }} />
                    </PurpleButton>
                    <Links style={{ marginTop: 60 }}>
                        <LinkItem style={{ textAlign: 'center' }}>Work</LinkItem>
                        <LinkItem style={{ textAlign: 'center' }}>About us</LinkItem>
                        <LinkItem style={{ textAlign: 'center', marginLeft: '0.8rem' }}>
                            Learn Design
                            <img src={Star} style={{ height: '0.55rem', width: '0.55rem', marginTop: '-1rem', marginLeft: '0.7rem' }} />
                        </LinkItem>
                        <LinkItem style={{ textAlign: 'center' }}>Blog</LinkItem>
                        <LinkItem style={{ textAlign: 'center' }}>Shop</LinkItem>
                    </Links>
                </LinkContainer>
                <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem' }}>
                    <LinkItem style={{ textAlign: 'center', color: '#4c6074', marginTop: 10 }}>1302, Sumo Sonnet, Kudlu Road, Bangalore, India.</LinkItem>
                    <LinkItem style={{ textAlign: 'center', color: '#4c6074', marginTop: 10 }}>+91 81975 58162</LinkItem>
                </div>
            </FooterContainer>
        )
    }
}


export default Footer
