import styled from 'styled-components';

export const Container = styled.div`
    height: 75vh;
    min-height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    position: relative;
`

export const LandingHeader = styled.h1`
    font-family: ClanOT-News;
    font-size: 1.8rem;
    line-height: 1.2;
    color: #000000;
    @media (max-width: 774px) {
        font-size: 1.4rem;
    }
`

export const LandingDescription = styled.h2`
    font-family: ClanOT-News;
    font-size: 1rem;
    line-height: 1.2;
    color: #808b98;
    margin-top: 1rem;
    @media (max-width: 774px) {
        font-size: 0.8rem;
    }
`

export const ContactWithus = styled.p`
    font-family: ClanOT-News;
    font-size: 0.6rem;
    line-height: 1.21;
    color: #808b98;
`

export const LandingBottom = styled.div`
    position: absolute;
    bottom: 2rem; 
    display: flex;
    width: 100%;
    justify-content: space-between; 
    @media (max-width: 774px) {
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }  
`

export const ScrollContainer = styled.div`
    align-items: center;
    display: flex; 
    flex-direction: column;
    @media (max-width: 774px) {
        display: none;
    }
`

export const LineContact = styled.div`
    background-color:  #e4e7ef;
    width: 13rem;
    height: 0.09rem;
`

export const SocialHandleContainter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 13rem;
    margin: 1rem 0;
`

export const SocialContainer = styled.div`
    align-self: flex-end;
`

export const ScrollBox = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    border: solid 1px #e1e8ef;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: -1.25rem;
`

export const LineVertical = styled.div`
    background-color:  #e4e7ef;
    height: 6.25rem;
    width: 0.06rem;
    z-index: 100;
    position: relative;
`

export const ScrollDot = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    align-self: center;
    background-color: #ffc6ad;
`