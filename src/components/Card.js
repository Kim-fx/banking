import React from 'react';

const Card = () => {
    return (
        <div className='gray'>
            <div className='glance'> <h3>Our services at a Glance</h3>
                <div className='split'>
                    <div className='card'>
                        <h3 className='bank'>INSTITUTIONAL BANKING</h3>
                        <h6 className='lorem'>At FBN Bank (UK), we are dedicated to helping your business grow. You’ll find our corporate banking products and services highly competitive.</h6>
                        <input type='button' value='VIEW MORE' className='view'/>
                    </div>
                    <div className='card'>
                        <h3 className='bank'>INSTITUTIONAL BANKING</h3>
                        <h6 className='lorem'>At FBN Bank (UK), we are dedicated to helping your business grow. You’ll find our corporate banking products and services highly competitive.</h6>
                        <input type='button' value='VIEW MORE' className='view'/>
                    </div>
                    <div className='card'>
                        <h3 className='bank'>INSTITUTIONAL BANKING</h3>
                        <h6 className='lorem'>At FBN Bank (UK), we are dedicated to helping your business grow. You’ll find our corporate banking products and services highly competitive.</h6>
                        <input type='button' value='VIEW MORE' className='view'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
