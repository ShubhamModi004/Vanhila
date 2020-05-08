import React from "react"
import styled from "styled-components"
import { animated } from 'react-spring'
import { Link } from "gatsby"


export const HeaderContainer = styled.header`
  display: flex;
  height: 7rem;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
`


export const Container = styled(animated.div)`
  position: absolute;
  top: 10 !important;
  right: 10 !important;
  z-index: 100;
  top: 0;
  right: 0;
  margin-top: 10;
  margin-right: 10;
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: blue;
  border-radius: 5px;
  cursor: pointer;
  will-change: width, height;
  @media (min-width: 994px) {
    display: none;
  }
`

export const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`

export const LinkItem = styled(Link)`
  color: #809198;
  font-size: 0.75rem;
  font-family: ClanOT-News;
  margin-bottom: 0;
  &:hover {
    cursor: pointer;
    text-decoration: none !important;
    text-underline-position: none;
    color: #809198;
  }
`

export const LogoContainer = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  flex: 0.4;
  align-items: center;
  @media (max-width: 774px) {
    width: 5rem;
    height: 5rem;
  }
`

export const LogoImage = styled.img`
  height: 6rem;
  width: 6rem;
  @media (max-width: 774px) {
    width: 4rem;
    height: 4rem;
  }
`

export const SiteName = styled.h1`
  font-size: 1rem;
  margin-left: 0.5rem;
  margin-bottom: 0;
  font-weight: 300;
  color: #000;
  font-family: ClanOT-Light;
  @media (min-width: 774px) {
    font-size: 0.6rem;
  }
  &:hover{
    text-decoration: none !important;
    text-underline-position: none;
    color: #000;
  }
  &:focus {
    text-decoration: none;
    text-underline-position: none;
    color: #000;
  }
`

export const LogoLink = styled(Link)`
  &:hover{
    text-decoration: none !important;
    text-underline-position: none;
    color: #000;
  }
`

export const Links = styled.div`
  display: flex;
  flex: 0.6;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 994px) {
    display: none;
  }
`

export const HamburgerMenu = styled.img`
  height: 1.55rem;
  width: 1.55rem; 
  z-index: 1000;
  margin-right: 0.5rem;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 994px) {
    display: none;
  }
`


