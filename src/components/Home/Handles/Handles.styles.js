import styled from 'styled-components';

export const BlogContainer = styled.div`
    background-color: #fff;
    padding: 3.5rem 0; 
`

export const BlogContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 5rem;
`


export const MediumLink = styled.p`
    width: 7rem;
    font-family: ClanOT-SemiBold;
    font-size: 0.8rem;
    line-height: 1.8;
    text-align: left;
    margin-bottom: 0;
    color: #4f4791;
    align-self: right;
    border-bottom: solid 0.5px #ffc6ad;
    a {
        color: #4f4791;
        text-decoration: none;
        &:hover  {
            text-decoration: none;
        }
    }
`

export const Handles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    @media (max-width: 774px) {
        padding: 2rem 0rem;
    }
`

export const Handle = styled.div`
    width: 7rem;
    height: 7rem;
    margin: 0 0.5rem;
    border-radius: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.background || '#e2edfa'};
    transition: all 0.1s ease-in-out;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
    @media (max-width: 774px) {
        width: 2.5rem;
        height: 2.5rem;
    }
    
`