import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import common styles
import {
    Title,
    Description,
    ListItem,
    ContainerDescription,
    WhiteButton
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
} from './Team.styles'


// import svgs 
import ArrowRight from '../../../images/assets/arrow-right.svg';


const content = [
    { name: 'Founder and Product Designer', header: 'Sohail' },
    { name: 'Social Media Manager', header: 'Nihla' },
    { name: 'Director', header: 'Noorjahan' },
    { name: 'Head of Sales and Marketing', header: 'Sneha' },
    { name: 'Product Manager', header: 'Shama' },
    { name: 'Full Stack Developer', header: 'Shubham' },
    { name: 'Product Designer', header: 'Kailash' },
    { name: 'Front End Developer', header: 'Vicky' },
    { name: 'Motion Graphics', header: 'Rupak' },
]


class Work extends Component {
    static propTypes = {

    }

    render() {
        return (
            <WorkContainer className='container'>
                <Title color={`#ff9a96`}>THE TEAM</Title>
                <Description color={`#000`}>See what we worked on this year</Description>
                <WorkItems>
                    {content.map((data, index) => (
                        <WorkItemContainer index={index} total={content.length}>
                            <WorkImageContainer app={data.type} />
                            <Description color={`#000`} style={{ marginTop: '1rem', marginBottom: '0.2rem' }}>{data.header}</Description>
                            <ListItem color={'#808b98'} style={{ marginTop: '0rem' }}>
                                {data.name}
                            </ListItem>
                        </WorkItemContainer>
                    ))}
                </WorkItems>
            </WorkContainer>
        )
    }
}

export default Work
