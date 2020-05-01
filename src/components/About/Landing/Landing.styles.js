import styled from 'styled-components';

import img from '../../../images/LeafBG.png'


export const Container = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    position: relative;
`

export const LandingHeader = styled.h1`
    font-family: ClanOT-News;
    font-size: 2rem;
    line-height: 1.2;
    margin-top: 4rem;
    color: #000000;
    @media (max-width: 774px) {
        font-size: 1.6rem;
    }
`

export const LandingDescription = styled.h2`
    font-family: ClanOT-News;
    font-size: 1.2rem;
    line-height: 1.2;
    color: #808b98;
    margin-top: 1rem;
    @media (max-width: 774px) {
        font-size: 0.9rem;
    }
`


