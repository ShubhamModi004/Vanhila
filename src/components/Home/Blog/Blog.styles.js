import styled from 'styled-components';

export const BlogContainer = styled.div`
    background-color: #fff;
    padding: 3.5rem 0; 
`

export const BlogContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    min-height: 7rem;
    @media (max-width: 774px) {
        flex-direction: column;
        margin-top: 0rem;
        padding: 1.5rem 0;
        min-height: 7rem;
        text-align: center;
        justify-content: space-evenly;
    }
    
`


export const MediumLinkContainer = styled.div`
    display: flex; 
    justify-content: flex-end; 
    flex: 0.2; 
    align-items: center;
    @media (max-width: 774px) {
        justify-content: center; 
    }
`

export const MobilePush = styled.div`
    margin-top: 0;
    @media (max-width: 774px) {
        margin-top: 2rem;
    }
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
    @media (max-width: 774px) {
        align-self: center;
        margin-left: 0 !important;
        text-align: center;
    }
`
