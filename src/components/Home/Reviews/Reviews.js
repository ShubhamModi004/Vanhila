import React, { useState, useCallback, Fragment } from 'react'
import { useTransition, animated } from 'react-spring'

// import Who we are components
import {
    ReviewContainer,
    Semicolon,
    Content,
    ReviewButton,
    Image,
    Reviewer
} from './Reviews.styles';

// import common styles 
import {
    Title,
    Description,
    Padding,
    ListItem
} from '../../common/Styles/styles'

// import svgs 
import ArrowLeft from '../../../images/assets/left-arrow.svg';
import ArrowRight from '../../../images/assets/right-arrow.svg';

const content = [
    { reviewer: 'Shubham', content: 'Has been awesome working with you guys, and then deliverables speak for themselves.', designation: 'Founder at StudyTable' },
    { reviewer: 'Sohail', content: 'Pleasure working with you guys', designation: 'Windmill coders' },
    { reviewer: 'Shreya', content: 'Vanhilla is perfect destination to get your startup up and going', designation: 'Senoir Content writer' },
    { reviewer: 'Seemran', content: 'Till I collapse I am spilling this rap.', designation: 'Marketting at Eminem' },
]


const Reviews = () => {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % content.length), [])
    const onClickBack = useCallback(() => set(state => (state - 1) % content.length), [])
    const transitions = useTransition(index, p => p, {
        enter: { opacity: 1, zIndex: 10, position: 'absolute', height: '12rem' },
        leave: { opacity: 0, zindex: -10, position: 'absolute', height: '12rem' },
    })
    const opacity = useTransition(index, p => p, {
        enter: { opacity: 1, zIndex: 10, position: 'absolute', top: '6rem' },
        leave: { opacity: 0, zindex: -8, position: 'absolute', top: '6rem' },
    })

    return (
        <ReviewContainer>
            <div className='container'>
                <Padding>
                    <Title color={'#fff'}>REVIEWS</Title>
                    <Description style={{ color: '#a9a1eb' }}>
                        Word on the streets
                    </Description>
                    <Semicolon>“</Semicolon>
                    <div style={{ height: 'auto', minHeight: '11rem', position: "relative" }}>
                        {transitions.map(({ item, props, key }) => {
                            const ReviewContent = content[item]
                            return (
                                <animated.div key={key} style={props}>
                                    <Content>{ReviewContent.content}</Content>
                                </animated.div>
                            )
                        })}
                        {opacity.map(({ item, props, key }) => {
                            const RiewerContent = content[item]
                            return (
                                <Reviewer key={key} style={props}>
                                    <Description className='unselectable' style={{ color: '#a9a1eb', fontSize: '1rem', margin: 0, marginTop: '2rem' }}>
                                        {RiewerContent.reviewer}
                                    </Description>
                                    <Description className='unselectable' style={{ color: '#fff', fontSize: '0.8rem', margin: 0, width: '12rem' }}>
                                        {RiewerContent.designation}
                                    </Description>
                                </Reviewer>
                            )
                        })}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <ReviewButton opacity={(index == 0)} onClick={index == 0 ? null : onClickBack} >
                                <Image className='unselectable' src={ArrowLeft} />
                            </ReviewButton>
                            <ReviewButton opacity={(index == (content.length - 1))} style={{ marginLeft: '2.8rem' }} onClick={index == (content.length - 1) ? null : onClick}>
                                <Image className='unselectable' src={ArrowRight} />
                            </ReviewButton>
                        </div>
                    </div>
                </Padding>
            </div>
        </ReviewContainer>
    )
}




export default Reviews
