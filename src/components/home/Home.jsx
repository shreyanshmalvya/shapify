import React from 'react';
import './home.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;


const Home = () => {
    return (
        <div>
            <div className='headerTxt font-face-mff'><p>WELCOME TO SHAPIFY</p></div><br />
            <div className='options'>
                <div className='sketch'>
                    <img src={PF + 'sketch.png'} alt='Sketch' />
                    <p className='optionTxt'>Sketch</p>
                </div>
                <div className='voxelArt'>
                    <img src={PF + 'voxel.png'} alt='Voxel'/>
                    <div><p className='optionTxt'>Voxel</p></div>
                </div>
            </div>
        </div>
    )
}

export default Home
