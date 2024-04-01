import React from 'react';
import res from '../../assets/Jayasurya CV2.pdf'

const headerButton = () => {
    return (
        <div className='button'>
            <a href={res} download className='btn'>Download CV </a>
            <a href='#contact ' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default headerButton