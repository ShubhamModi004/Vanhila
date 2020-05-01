import styled from 'styled-components';

import img from '../../../images/LeafBG.png'


export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    background: #fff;
    position: relative;
    @media (max-width: 774px) {
        padding: 2rem 1rem;
        height: 70vh;
    }
`

export const TeamHeader = styled.h1`
    font-family: ClanOT-News;
    font-size: 1.4rem;
    margin-right: 2rem;
    line-height: 3rem;
    color: #000000;
    @media (max-width: 774px) {
        font-size: 1rem;
        margin-right: 0rem;
        line-height: 1.5rem;
    }
`


export const FrameworkContainer = styled.div`
   
    height: 22rem;
    width: 100%;
    background-image: url(${img});
    background-size: cover;
    position: relative;
    margin: 4rem 0;@media (max-width: 774px) {
        height: 15rem;
    }
`


export const Overlay = styled.div`
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
     display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
`
