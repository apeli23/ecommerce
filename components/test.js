import React from 'react'
import Image from 'next/image';
import Jordans from '../public/images/jordans.jpg';

function Test() {
    return (
        <div>
            <Image width='300' height='300' src={Jordans} alt="test" />


        </div>
    )
}

export default Test
