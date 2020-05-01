import styled from 'styled-components';


const handleHeight = app => {
    switch (app) {
        case "mobileapp":
            return "25rem";
        case "website":
            return "16rem";
        case "logodesign":
            return "18rem";
        default:
            return "21rem";
    }
};

const handleIndex = (index, total) => {
    let half = total / 2;
    let remainder = total % 2;
    if (remainder == 0) {
        return (index + 1) > half ? 'right' : 'none'
    } else {
        return index > half ? 'right' : 'none'
    }
}

export const WorkContainer = styled.div`
    padding: 3.5rem 0; 
`

export const WorkItems = styled.div`
    column-count: 2;
    padding: 2rem 0;
    @media (max-width: 774px) {
        column-count: 1;
        padding: 2rem 0.5rem;
    }
`

export const WorkItemContainer = styled.div`
    width: 25rem;
    margin: 1rem 0;
    display: inline-block;
    vertical-align: bottom;
    float: ${({ index, total }) => handleIndex(index, total)};
    @media (max-width: 774px) {
        width: 100%;
        float: left;
    }
`

export const WorkImageContainer = styled.div`
    width: 25rem;
    background-color: #ffccb5;
    height: ${({ app }) => handleHeight(app)};
    @media (max-width: 774px) {
        width: 100%;
        float: none;
        height: 22rem;
    }
`

export const Link = styled.a`
    font-family: ClanOT-News;
    font-size: 0.7rem;
    letter-spacing: 0.015rem;
    line-height: 1.2;
    padding-right: 0.4rem;
    padding-bottom: 0.2rem;
    margin: 0;
    color: #4f4791 !important;
    border-bottom: solid 1px #ffc6ad;
    cursor: pointer;
    &:hover{
        cursor: pointer;
    }
`

export const Course = styled.div`
    background-color: #ceeeff;
    min-height: 30rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 774px) {
        flex-direction: column;
    }
`

export const VideoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0.5;
`

export const Video = styled.div`
    width: 25rem;
    height: 20rem;
    border-radius: 2rem;
    align-self: flex-end;
    background-color: #eff9ff;
    @media (max-width: 774px) {
        width: 20rem;
        align-self: center;
        margin-top: 4rem;
        height: 15rem;
    }
`

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 0.5;
    text-align: left;
    padding-left: 4rem;
    margin: 6rem 0;
    @media (max-width: 774px) {
        padding-left: 0rem;
        text-align: center;
        margin: 3rem 0;
        align-items: center;
    }
`

export const Resource = styled.div`
    background-color: #ffc6ad;
    min-height: 25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 6rem 0;
    @media (max-width: 774px) {
        padding: 2rem 0;
        flex-direction: column-reverse;
        text-align: center;
        margin: 3rem 0;
        align-items: center;
    }
`

export const WhiteBox = styled.div`
    width: 15rem;
    height: 15rem;
    border-radius: 15px;
    box-shadow: 0 8px 16px 0 rgba(222, 163, 137, 0.3);
    background-color: #ffffff;
    @media (max-width: 774px) {
        margin: 1rem 0;
        width: 20rem;
    }
`