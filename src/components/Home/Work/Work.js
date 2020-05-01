import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import common styles
import {
    Title,
    Description,
    ListItem,
    ContainerDescription,
    WhiteButton,
    Padding
} from '../../common/Styles/styles'

// import styles
import {
    WorkContainer,
    WorkItems,
    WorkItemContainer,
    WorkImageContainer,
    Link,
    Course,
    VideoContainer,
    DescriptionContainer,
    Video,
    Resource,
    WhiteBox
} from './Work.styles'


// import svgs 
import ArrowRight from '../../../images/assets/arrow-right.svg';


const content = [
    { name: 'Payper', header: 'Description', link: 'https://codewithshubham.com/', type: 'mobileapp' },
    { name: 'Sumo Club', header: 'Description', link: 'https://codewithshubham.com/', type: 'mobileapp' },
    { name: 'Digit88', header: 'Description', link: 'https://codewithshubham.com/', type: 'website' },
    { name: 'Mali', header: 'Description', link: 'https://codewithshubham.com/', type: 'branding' },
    { name: 'Faceo', header: 'Description', link: 'https://codewithshubham.com/', type: 'website' },
    { name: 'Rentar', header: 'Description', link: 'https://codewithshubham.com/', type: 'mobileapp' },

]


class Work extends Component {
    static propTypes = {

    }

    render() {
        return (
            <WorkContainer className='container'>
                <Padding>
                    <Title color={`#ff9a96`}>OUR WORK</Title>
                    <Description color={`#000`}>See what we worked on this year</Description>
                    <WorkItems>
                        {content.map((data, index) => (
                            <WorkItemContainer index={index} total={content.length}>
                                <WorkImageContainer app={data.type} />
                                <ListItem color={'#808b98'} style={{ marginTop: '1.8rem' }}>
                                    {data.name}
                                </ListItem>
                                <Description color={`#000`} style={{ margin: '0.8rem 0' }}>{data.header}</Description>
                                <Link>View case study</Link>
                            </WorkItemContainer>
                        ))}
                    </WorkItems>
                    <Course>
                        <VideoContainer>
                            <Video />
                        </VideoContainer>
                        <DescriptionContainer>
                            <Title color={`#334d5c`}>Masterclass - UI / UX Course</Title>
                            <ContainerDescription color={`#7baac4`}>We support the design</ContainerDescription>
                            <ContainerDescription color={`#7baac4`} style={{ marginBottom: 30 }}>community by giving back</ContainerDescription>
                            <WhiteButton shadow={true} width={`12rem`} style={{ border: 'none', borderRadius: '1.0rem', margin: '0rem 0', boxShadow: `0 6px 12px 0 rgba(174, 211, 230, 0.36)` }}>
                                Course Details
                            <img src={ArrowRight} style={{ height: '0.8rem', width: '0.8rem' }} />
                            </WhiteButton>
                        </DescriptionContainer>
                    </Course>
                    <Resource>
                        <div>
                            <Title color={`#653c2a`}>Resources</Title>
                            <ContainerDescription color={`#ce8c6f`}>Business or designer,</ContainerDescription>
                            <ContainerDescription color={`#ce8c6f`}>you could sure use our</ContainerDescription>
                            <ContainerDescription color={`#ce8c6f`}>pre designed UI kits</ContainerDescription>
                        </div>
                        <WhiteBox />
                        <WhiteBox />
                    </Resource>
                </Padding>
            </WorkContainer>
        )
    }
}

export default Work
