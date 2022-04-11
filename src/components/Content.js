import React from 'react';
import Image1 from '../images/christian-coquet-p1sdBSnS3Qc-unsplash.jpg';
import Image2 from '../images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
const Content = () => {
    return (
        <>
         <div className='menu-card'>
            <img src={Image1} alt ="eggs" className='h-full rounded mb-20 shadow' /> 
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Buffing </h2>
                <p className=''> Crispy , delicious and nutritious</p>
                <span>$23</span>
            </div>  
          </div>
          <div className='menu-card'>
            <img src={Image2} alt ="eggs" className='h-full rounded mb-20 shadow' /> 
            <div className='center-content'>
                <h2 className='text-2xl mb-2'>Egg Buffing </h2>
                <p className=''> Crispy , delicious and nutritious</p>
                <span>$23</span>
            </div>  
          </div>
        </>

    );
};

export default Content;