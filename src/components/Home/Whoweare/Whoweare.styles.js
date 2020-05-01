import styled from 'styled-components';

export const WhoContainer = styled.div`
    background-color: #fbf0e6;
    padding: 3.5rem 0; 
`


export const WhoList = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    margin-right: 10rem;
    @media (max-width: 774px) {
        margin-right: 1rem;
        display: grid;
        grid-template-columns: 50% 50%;
    }
`

export const WhoHeader = styled.h3`
    font-family: ClanOT-News;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 2.13;
    color: #ff9a96;
    margin-bottom: 1rem;
    @media (max-width: 774px) {
        margin-top: 1.5rem;
        margin-bottom: 0.2rem;
    }
`

