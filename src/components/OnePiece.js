import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './OnePiece.css';
import { useStateValue } from '../DataLayer';

function OnePiece() {

    const inputRef = useRef(null);
    const [{ input }, dispatch] = useStateValue('');

    const handleClick = () => {
        if (inputRef?.current?.value === '' || inputRef?.current?.value > 985) {
            return
        } else {
            dispatch({
                type: 'ADD-EPISODE',
                input: inputRef?.current?.value
            })
        }
    }

    const linkTo = () => {
        if (inputRef?.current?.value === '' || inputRef?.current?.value > 985) {
            alert('Episode infomation not avaiable yet...')
        } else {
            return '/display'
        }
    }
    
    return (
        <div className='onepiece'>
            <div>
                <input className='input' type='text' ref={inputRef} placeholder='Episode Number ###'/>
            </div>
            <div>
                <Link to={linkTo}>
                    <button className='button' onClick={handleClick}>Search Episode</button>
                </Link>
            </div>
            
        </div>
    )
}

export default OnePiece
