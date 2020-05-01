import React, { Fragment } from 'react'

import { Link } from 'gatsby';

// import Who we are components
import {
    BlogContainer,
    BlogContent,
    MediumLink,
    Handles,
    Handle,
    MediumLinkContainer,
    MobilePush
} from './Blog.styles';

// import common styles 
import {
    Title,
    Description,
    Divider,
    Dots,
    Dot,
    Padding
} from '../../common/Styles/styles'


const Blog = [
    { content: 'Tips and tricks to make your designs responsive within a minute', link: 'https://www.google.com/' },
    { content: 'Deeper understanding to usability', link: 'https://www.google.com/' },
    { content: 'Our approach to successful sprints', link: 'https://www.google.com/' },
]


const Reviews = () => {
    return (
        <BlogContainer>
            <div className='container'>
                <Padding>
                    <Title color={'#ff9a96'}>BLOG</Title>
                    <Description style={{ color: '#000', marginBottom: '5rem' }}>
                        From our library
                    </Description>
                    <MobilePush />
                    <Divider />
                    {Blog.map((item, index) => (
                        <Fragment>
                            <BlogContent key={index}>
                                <div style={{ display: 'flex', alignItems: 'center', flex: 0.8 }}>
                                    <Dots><Dot /></Dots>
                                    <Description style={{ color: '#000', fontSize: '1rem', marginLeft: '4rem' }}>{item.content}</Description>
                                </div>
                                <MediumLinkContainer>
                                    <MediumLink style={{ color: '#000', fontSize: '0.8rem', marginLeft: '4rem' }}>
                                        <a href={`${item.content}`} target='_blank'>
                                            Read on Medium
                                        </a>
                                    </MediumLink>
                                </MediumLinkContainer>
                            </BlogContent>
                            <Divider />
                        </Fragment>
                    ))}
                </Padding>
            </div>
        </BlogContainer>
    )
}




export default Reviews
