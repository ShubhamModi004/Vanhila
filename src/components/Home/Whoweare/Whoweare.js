import React from 'react'

// import Who we are components
import {
    WhoContainer,
    WhoTitle,
    WhoDescription,
    WhoList,
    WhoHeader,

} from './Whoweare.styles';

// import common styles 
import {
    WhiteButton,
    Title,
    Description,
    ListItem,
    Padding
} from '../../common/Styles/styles'

// import svgs 
import ArrowRight from '../../../images/assets/arrow-right.svg';

const content = [
    { header: 'Web', list: ['Design audit', 'UI/UX', 'Prototyping', 'Development'] },
    { header: 'Mobile apps', list: ['Design audit', 'UI/UX', 'Prototyping'] },
    { header: 'Branding', list: ['Brand identity', 'Brand style guide', 'Marketing materials'] },
    { header: 'Motion', list: ['Promo videos', 'Interaction design', 'Motion graphics'] },
    { header: 'Illustrations', list: ['Icons', '2D illustrations', '3D illustrations'] },
]

const Whoweare = () => {
    return (
        <WhoContainer>
            <div className='container'>
                <Padding>
                    <Title>WHO WE ARE</Title>
                    <Description>
                        We are a strategy led design studio that focuses on delivering great user experiences
                        that makes your brand memorable to your customers
                    </Description>
                    <WhiteButton shadow={true} width={`10rem`} style={{ border: 'none', borderRadius: '1.0rem', margin: '2rem 0' }}>
                        About us
                    <img src={ArrowRight} style={{ height: '0.75rem', width: '0.75rem' }} />
                    </WhiteButton>
                    <WhoList>
                        {content && content.map((data, index) => (
                            <div key={index}>
                                <WhoHeader>{data.header}</WhoHeader>
                                {data.list.map((item, index) => (
                                    <ListItem key={index}>{item}</ListItem>
                                ))}
                            </div>
                        ))}
                    </WhoList>
                </Padding>
            </div>
        </WhoContainer>
    )
}




export default Whoweare
