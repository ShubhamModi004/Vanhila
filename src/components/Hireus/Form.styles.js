import styled from 'styled-components'
import { Link } from 'gatsby';


export const FormContainer = styled.div`
    padding: 4rem 0;
`

export const BackButton = styled(Link)`
    width: 7rem;
    height: 3rem;
    border: solid 1px #dee4eb;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.2rem;
    border: solid 1px #dee4eb;
    font-family: ClanOT-News;
    font-size: 0.9rem;
    line-height: 1.2;
    color: #000;
    background-color: #fff;
    &:hover {
        cursor: pointer;
    }
`

export const InfoButton = styled.div`
    width: 16rem;
    height: 7rem;
    border: solid 1px #dee4eb;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    padding: 1.5rem 2.5rem;
    border-radius: 1.2rem;
    border: solid 1px #dee4eb;
    font-family: ClanOT-News;
    font-size: 0.9rem;
    line-height: 1.2;
    color: #000;
    background-color: #fff;
    &:hover {
        cursor: pointer;
    }
`


export const FormDescription = styled.h2`
    font-family: ClanOT-News;
    font-size: 1rem;
    line-height: 1;
    color: #808b98;
    @media (max-width: 774px) {
        font-size: 0.8rem;
    }
`

export const ReachContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    height: 8rem;
    margin-top: 2rem;
`


export const Services = styled.p`
    font-family: ClanOT-News;
    font-size: 0.8rem;
    line-height: 1;
    width: 70%;
    margin-bottom: 0.7rem;
    color: ${props => props.color || '#4f4791'};
    @media (max-width: 774px) {
        width: 100%;
        margin: 0.1rem 0 !important;
    }
`

export const ServiceDescription = styled.h2`
    font-family: ClanOT-News;
    font-size: 0.6rem;
    line-height: 1;
    color: #808b98;
`

export const PillContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
`

export const Pills = styled.div`
    min-width: 5rem;
    margin: 1rem 0.5rem;
    padding: 0rem 1.5rem;
    height: 2.2rem;
    border-radius: 2rem;
    background-color: ${props => props.background || '#eff1f4'};
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    font-size: 0.6rem;
    color:${props => props.background ? '#fff' : '#000'};
    font-family: ClanOT-News;
`

export const Input = styled.input`
    opacity: 0;
    position: absolute; 
    width: 100%; 
    height: 100%;
`


export const InputContainer = styled.div`
    width: 70vw;
    @media (max-width: 774px) {
        width: 100%;
        margin: 0.1rem 0 !important;
    }
`

export const PurpleSubmit = styled.button`
    width: 9rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1rem;
    color: #fff;
    font-size: 1rem;
    background-color: #4f4791;
    &:hover {
        cursor: pointer;
    }
`

export const Mailid = styled.a`
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
    &:hover {
        cursor: pointer;
        text-decoration: none;
        color: #000;
    }
`