import React from 'react'
import PropTypes from 'prop-types'

import './FormInput.styles.scss';

const FormTextArea = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <textarea className="form-input" onChange={handleChange} {...otherProps} />
            {
                label ?
                    (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>)
                    : null
            }
        </div>
    )
}

FormTextArea.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string
}

export default FormTextArea
