import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

// import Header styles
import {
  HeaderContainer,
  LogoContainer,
  SiteName,
  Links,
  LinkItem,
  Container,
  Item,
  LogoImage,
  HamburgerMenu,
  Global
} from './header-styles';

import { animated } from 'react-spring'

// import common styles
import {
  PurpleButton,
} from '../Styles/styles';

// animations
import { useTransition, useSpring, useChain, config } from 'react-spring'

import { Link } from "gatsby"


// npm packages
import Switch from "react-switch";

// import svgs
import Logo from '../../../images/logo.svg';
import ArrowRight from '../../../images/assets/arrow-right.svg'
import Hamburger from '../../../images/assets/hamburger.svg'
import Close from '../../../images/assets/Close.svg'


import Star from '../../../images/assets/Star.svg'


const Header = () => {
  const [open, set] = useState(false)
  const [checked, setChecked] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '0%', background: 'white', opacity: 0 },
    to: { size: open ? '93%' : '0%', opacity: 1, background: open ? '#fbf0e6' : 'white', boxShadow: '0px 10px 10px - 5px rgba(0, 0, 0, 0.05)', margin: '1rem', position: open ? 'fixed' : 'absolute' }
  })

  const transRef = useRef()
  const { sizeLinks, opacityLinks, ...restLinks } = useSpring({
    ref: transRef,
    config: config.stiff,
    from: { size: '0%', opacity: 0, display: 'none' },
    to: { size: open ? '100%' : '0%', opacity: open ? 1 : 0, display: open ? 'flex' : 'none' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.4])

  return (
    <HeaderContainer className='container'>
      <Link to="/">
        <LogoContainer>
          <LogoImage src={Logo} />
          <SiteName style={{ letterSpacing: 12, marginLeft: 15 }}>VANIHLA</SiteName>
        </LogoContainer>
      </Link>
      <Links>
        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '1rem' }}>
          <LinkItem style={{ marginRight: '1rem' }}>Light</LinkItem>
          <div style={{ marginLeft: '2.3rem', position: 'absolute', marginTop: '-0.1rem' }}>
            <Switch
              onColor={'#FBF0E6'}
              handleDiameter={12}
              height={17}
              width={30}
              onHandleColor={'#FFB893'}
              checkedIcon={false}
              uncheckedIcon={false}
              onChange={() => setChecked(!checked)}
              checked={checked}
            />
          </div>
        </div>
        <LinkItem>Work</LinkItem>
        <LinkItem to="/aboutus">About us</LinkItem>
        <LinkItem>
          Masterclass
             <img src={Star} style={{ height: '0.55rem', width: '0.55rem', marginTop: '-1rem', marginLeft: '0.7rem' }} />
        </LinkItem>
        <PurpleButton>
          Hire us
          <img src={ArrowRight} style={{ height: '0.6rem', width: '0.8rem' }} />
        </PurpleButton>
      </Links>
      {!open && (
        <HamburgerMenu src={Hamburger} onClick={() => set(open => true)} />
      )}

      <Container style={{ ...rest, width: size, height: size }} >
        {open && (
          <HamburgerMenu style={{ position: 'absolute', right: 0, top: 28 }} src={Close} onClick={() => set(open => false)} />
        )}
        <animated.div style={{ ...restLinks, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <LinkItem style={{ color: '#4f4791', fontSize: '2rem', textAlign: 'center' }}>Work</LinkItem>
          <LinkItem to="/aboutus" style={{ color: '#4f4791', fontSize: '2rem', textAlign: 'center' }}>About us</LinkItem>
          <LinkItem style={{ color: '#4f4791', fontSize: '2rem', textAlign: 'center', marginLeft: '1.5rem' }}>
            Masterclass
             <img src={Star} style={{ height: '1rem', width: '1rem', marginTop: '-1.5rem', marginLeft: '1rem' }} />
          </LinkItem>
          <PurpleButton style={{ width: '14rem', height: '4rem', fontSize: '1.5rem' }}>
            Hire us
            <img src={ArrowRight} style={{ height: '0.6rem', width: '0.8rem' }} />
          </PurpleButton>
        </animated.div>
      </Container>
    </HeaderContainer>
  )
}


export default Header
