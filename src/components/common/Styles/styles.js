import styled from 'styled-components'

const shadow = '10px 10px 27px 23px rgba(0,0,0,0.16)'


export const PurpleButton = styled.button`
    width: 8rem;
    height: 2.7rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0.5rem;
    color: #fff;
    font-size: 0.75rem;
    background-color: #4f4791;
    &:hover {
        cursor: pointer;
    }
`


export const WhiteButton = styled.button`
    width: ${props => props.width || `18rem`};
    height: 3.5rem;
    border: solid 1px #dee4eb;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1rem;
    font-family: ClanOT-News;
    font-size: 0.8rem;
    line-height: 1.2;
    color: #4f4791;
    background-color: #fff;
    -webkit-box-shadow: ${props => props.Shadow && shadow};
    -moz-box-shadow: ${props => props.Shadow && shadow};
    box-shadow: ${props => props.Shadow && shadow};
    &:hover {
        cursor: pointer;
    }
`


export const Padding = styled.div`
    padding: 2rem;
    @media (max-width: 774px) {
        padding: 2rem 1rem;
    }
`


export const Title = styled.h1`
    font-family: ClanOT-News;
    font-size: 0.75rem;
    line-height: 3.19;
    color: ${props => props.color || '#ac8f75'};
`

export const Description = styled.p`
    font-family: ClanOT-News;
    font-size: 1.2rem;
    line-height: 1.7;
    width: 70%;
    color: ${props => props.color || '#4f4791'};
    margin: 1rem 0;
    @media (max-width: 774px) {
        width: 100%;
        margin: 0.1rem 0 !important;
    }
`

export const ListItem = styled.p`
    font-family: ClanOT-News;
    font-size: 0.8rem;
    color: ${props => props.color || '#7e7b96'};
    margin: 10px 0;
    @media (max-width: 774px) {
        margin-top: 0.7rem;
        margin-bottom: 0.5rem;
    }
`

export const ContainerDescription = styled.p`
    font-family: ClanOT-News;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 0;
    color: ${props => props.color || '#7e7b96'};
`

export const Divider = styled.div`
    width: 100%;
    height: 0;
    border: solid 0.5px #e5e4ef;
`

export const Dots = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.5rem;
    background-color: ${props => props.color || 'rgba(255, 204, 181, 0.12)'};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 774px) {
        display: none;
    }
`

export const Dot = styled.div`
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 0.8rem;
    background-color: ${props => props.color || '#ffccb5'};
`