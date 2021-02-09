import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Display.css';
import { useStateValue } from '../DataLayer';
import { useHistory } from "react-router-dom";

function Display() {

    const [{ input }] = useStateValue();
    const [episode, setEpisode] = useState({});
    let history = useHistory();
    
    useEffect(() => {
        
        axios.get(`/onepiece`, {
            params: {
                input: input
            } 
        }).then((response) => {
            setEpisode(response);
        })

    }, [input])
    
    return (
        <div className='display'>
            <div className='wrapper'>
                <div className='title'>
                    <h1>Title: </h1>
                    <h3>{episode?.data?.title}</h3>
                </div>

                <div className='chapter'>
                    <h1>Chapter: </h1>
                    <h3>{episode?.data?.chapter}</h3>
                </div>

                <div className='image'>
                    <button className='button-display' onClick={() => history.goBack()}>Back</button>
                    <img src='https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440' alt='ONE PIECE'/>
                </div>

                <div className='summary'>
                    <h1>Summary: </h1>
                    <h3>{episode?.data?.summary}</h3>
                </div>

                <div className='characters'>
                    <h1>Characters: </h1>
                    <h3>{episode?.data?.characters}</h3>
                </div>

                {/* <h1>Cover Photo: </h1> */}
                {/* <img src={episode?.data?.cover_images}/> */}
            </div>
            
        </div>
    )
}

export default Display
