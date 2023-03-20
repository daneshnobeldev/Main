
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'

import './AnimalShow.css';
import { useState } from 'react'

function AnimalShow({
    type
}){

    const [clicks,setClicks] = useState(0);
    const svgMap = {
        bird,cat,cow,dog,gator,horse
    }

    const handleClick = () =>{
        if(clicks < 15)
            setClicks(clicks+1);

            console.log(clicks);
    }

    return (
        <div onClick={handleClick} className='animal-show'>
            <img className='animal' src={svgMap[type]} alt="animal" />
            <img className='hear'
            style={{width:10 + 10*clicks + 'px'}}
            src={heart} alt="like" />
        </div>
    )

}


export default AnimalShow;