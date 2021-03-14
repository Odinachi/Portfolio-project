import React from 'react'
import Particles from 'react-particles-js';
import Typed from 'react-typed';

export default function Header() {
    return (
        <div className='headerclass'>
            <div className="main-info">
                <h1>ODINACHI DAVID KALU</h1>

                <Typed className='typedclass'
                strings={[
                'WEB DEVELOPMENT',
                'REACT JS',
                'JAVASCRIPT',
                'DJANGO',
                'PYTHON',
                'SQL']} 
                typeSpeed={10}
                backSpeed={60} loop/>
                <a href="https://drive.google.com/file/d/1__YvB7DhfBRJs4qkh0qHED6l30Kwh3Uq/view?usp=drivesdk" className="btn-main-info">My Resume</a>
            </div>    
            <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        numbers: {
                            value: 40,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type:"square",
                            stroke: {
                                width: 5,
                                color: "#f9ab00"
                            }
                        }
                    }
                }}/>

        </div>
    )
}
