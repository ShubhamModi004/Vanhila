import React, { Component } from 'react'

import {
    BackButton,
    FormContainer,
    FormDescription,
    ReachContainer,
    Services,
    ServiceDescription,
    InfoButton,
    PillContainer,
    Pills,
    Input,
    InputContainer,
    Attachment,
    PurpleSubmit,
    Mailid
} from './Form.styles';

// import common styles
import {
    Title,
    Description,
    PurpleButton
} from '../common/Styles/styles';

// import common components
import FormInput from '../common/FormInput/FormInput';
import FormTextArea from '../common/FormInput/FormTextArea';


import Left from '../../images/assets/Left.svg'
import ArrowRight from '../../images/assets/arrow-right.svg'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false,
            website: false,
            branding: false,
            motion: false,
            illustrations: false,
            name: '',
            email: '',
            details: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const checked = target.checked
        console.log('value of the checked', checked);
        this.setState({
            [value]: !this.state[value]
        }, () => {
            console.log('the value of state', this.state);
        });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <FormContainer className="container">
                <BackButton>
                    <img src={Left} style={{ height: '0.8rem', width: '0.8rem', marginRight: '0.5rem' }} />
                Back
            </BackButton>

                <ReachContainer>
                    <div>
                        <Title color='#ff9a96' style={{ lineHeight: '1rem', margin: 0 }}>Hire us</Title>
                        <Description color='#000'>Glad you found us interesting</Description>
                        <FormDescription>Please fill out this form and we shall get back to you soon</FormDescription>
                    </div>
                    <InfoButton>
                        <Title color='#ff9a96' style={{ lineHeight: '1rem', margin: 0 }}>Reach out to us</Title>
                        <Mailid href="mailtoinfo@vanihla.com:.com" color='#000' style={{ lineHeight: '2.5rem', margin: 0 }}>info@vanihla.com</Mailid>
                    </InfoButton>
                </ReachContainer>
                <div style={{ marginTop: '4rem' }}>
                    <Services color='#000'>Services</Services>
                    <ServiceDescription>you can pick multiple options</ServiceDescription>
                </div>
                <form method="POST" action="https://formspree.io/info@vanihla.com" enctype="multipart/form-data">
                    <PillContainer>
                        <Pills background={this.state.mobile && '#FFC6AD'}>
                            Mobile<Input value="mobile" type="checkbox" checked={this.state.mobile} onChange={this.handleInputChange} />
                        </Pills>
                        <Pills background={this.state.website && '#FFC6AD'}>
                            Website<Input value="website" type="checkbox" checked={this.state.website} onChange={this.handleInputChange} />
                        </Pills>
                        <Pills background={this.state.branding && '#FFC6AD'}>
                            Branding<Input value="branding" type="checkbox" checked={this.state.branding} onChange={this.handleInputChange} />
                        </Pills>
                        <Pills background={this.state.motion && '#FFC6AD'}>
                            Motion graphics<Input value="motion" type="checkbox" checked={this.state.motion} onChange={this.handleInputChange} />
                        </Pills>
                        <Pills background={this.state.illustrations && '#FFC6AD'}>
                            Illustrations / graphics<Input value="illustrations" type="checkbox" checked={this.state.illustrations} onChange={this.handleInputChange} />
                        </Pills>
                    </PillContainer>
                    <InputContainer>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ width: '45%' }}>
                                <FormInput
                                    handleChange={(e) => this.handleChange(e)}
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    required
                                    label='Name'
                                />
                            </div>
                            <div style={{ width: '45%' }}>
                                <FormInput
                                    handleChange={(e) => this.handleChange(e)}
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    required
                                    label='Email'
                                />
                            </div>
                        </div>
                        <FormTextArea
                            handleChange={(e) => this.handleChange(e)}
                            name="details"
                            type="text"
                            value={this.state.details}
                            required
                            label='Project details'
                            style={{ fontSize: '1rem', lineHeight: '1.7rem', paddingRight: '10rem' }}
                        >Project details</FormTextArea>
                        <PurpleSubmit type="submit" value="send" style={{ height: '3rem', marginTop: '4rem' }}>
                            Submit
                            <img src={ArrowRight} style={{ height: '0.6rem', width: '0.8rem' }} />
                        </PurpleSubmit>
                    </InputContainer>
                </form >
            </FormContainer >
        )
    }
}


export default Form;