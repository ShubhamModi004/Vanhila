import styled from 'styled-components';
import { animated } from 'react-spring'

export const ReviewContainer = styled.div`
    background-color: #4f4791;
    padding: 3.5rem 0; 
    @media (max-width: 774px) {
       height: 35rem;
    }
`


export const WhoList = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    margin-right: 12rem;
`

export const ReviewHeader = styled.h3`
    font-family: ClanOT-SemiBold;
    font-size: 0.8rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 0.5rem;
`

export const Semicolon = styled.p`
    font-family: ClanOT-News;
    font-size: 12rem;
    color: #a9a1eb;
    opacity: 0.4;
    line-height: 12rem;
    margin-top: 5rem;
    margin-bottom: -7rem;
    margin-left: -0.5rem;
    user-select: text;
    @media (max-width: 774px) {
        font-size: 6rem;
        margin-top: 1rem;
    }
`

export const Content = styled.p`
    font-family: Merriweather;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: #ffffff;
    margin-right: 10rem;
    margin-bottom: 5rem;
    @media (max-width: 774px) {
         margin-right: 0rem;
        margin-bottom: 0rem;
        font-size: 1.2rem;
        line-height: 2rem;
    }
`

export const Reviewer = styled(animated.div)`
    @media (max-width: 774px) {
       margin-top: 3.7rem;
    }
`

export const ReviewButton = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    background: #fff;
    width: 2.8rem;
    height: 2.8rem;    
    position: absolute;
    bottom: 0;
    margin-bottom: 0.2rem;
    left: 15rem;
    z-index: 100;
    opacity: ${props => props.opacity ? 0.6 : 1};
    transition: all 0.1s ease-in-out;
    &:hover {
      cursor: ${props => props.opacity ? 'null' : 'pointer'};
       opacity: 0.8;
    }
    @media (max-width: 774px) {
        bottom: -2rem;
        margin-left: auto;
        left: 12rem;
    }
`

export const Image = styled.img`
    height: 0.6rem;
    width: 0.6rem;
    cursor: pointer;
    user-select: text;
   -webkit-touch-callout: none;
`