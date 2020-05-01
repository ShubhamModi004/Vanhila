import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import img from '../../../images/assets/Rectangle.png'

export const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  min-height: 40rem;
  flex-direction: column;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  @media (max-width: 740px) {
     min-height: 50rem;
     padding-bottom: 0rem;
     background-size: cover;
  }
`

export const LinkItem = styled(Link)`
  color: #809198;
  font-size: 0.7rem;
  font-family: ClanOT-News;
  margin-bottom: 0;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 740px) {
     margin-bottom: 1rem;
  }
`


export const LogoContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 20;
`


export const SiteName = styled.h1`
  font-size: 0.8rem;
  margin-left: 0.5rem;
  margin-bottom: 0;
  font-weight: 300;
  color: #fff;
  font-family: ClanOT-Light;
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 740px) {
     flex-direction: column;
  }
`

export const LinkContainer = styled.div`
  width: 50%;
`


