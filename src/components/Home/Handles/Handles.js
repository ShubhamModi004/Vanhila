import React, { Fragment } from 'react'

import { Link } from 'gatsby';

// import Who we are components
import {
    BlogContainer,
    BlogContent,
    MediumLink,
    Handle,
    Handles
} from './Handles.styles';

// import common styles 
import {
    Title,
    Description
} from '../../common/Styles/styles'

import linkedIn from '../../../images/assets/linkedin-fill.svg';
import facebook from '../../../images/assets/facebook-fill.svg';
import instagram from '../../../images/assets/instagram-fill.svg';
import dribbble from '../../../images/assets/dribbble-fill.svg';
import twitter from '../../../images/assets/twitter-fill.svg';
import behance from '../../../images/assets/behance-fill.svg';



const Blog = [
    { content: 'Tips and tricks to make your designs responsive within a minute', link: 'https://www.google.com/' },
    { content: 'Deeper understanding to usability', link: 'https://www.google.com/' },
    { content: 'Our approach to successful sprints', link: 'https://www.google.com/' },
]


const Reviews = () => {
    return (
        <BlogContainer>
            <div className='container'>
                <Title color={'#ff9a96'} style={{ textAlign: 'center', marginBottom: 0 }}>Connect with us</Title>
                <Description style={{ color: '#000', textAlign: 'center', width: '100%', marginTop: '0.5rem' }}>
                    Get to know us better
                    </Description>
                <Handles>
                    <Handle><img src={linkedIn} style={{ height: '1rem', width: '1rem' }} /></Handle>
                    <Handle background={'#e6edff'}><img src={facebook} style={{ height: '1rem', width: '1rem' }} /></Handle>
                    <Handle background={'#ffece6'}><img src={instagram} style={{ height: '1rem', width: '1rem' }} /></Handle>
                    <Handle background={'#fae2e6'}><img src={dribbble} style={{ height: '1rem', width: '1rem' }} /></Handle>
                    <Handle background={'#e2edfa'}><img src={twitter} style={{ height: '1rem', width: '1rem' }} /></Handle>
                    <Handle background={'#e2edfa'}><img src={behance} style={{ height: '1rem', width: '1rem' }} /></Handle>
                </Handles>
            </div>
        </BlogContainer>
    )
}




export default Reviews
