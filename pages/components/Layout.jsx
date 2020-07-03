
import React from 'react';

export default ({children})=>{

    return(<div className='layout'>
        <header>
            <u >
                <li style={{display:'inline-block',padding:'0 5px'}}>
                    <a href='/'>Home</a>
                </li>
                <li style={{display:'inline-block',padding:'0 5px'}}>
                    <a href='/usuarios'>Usuarios</a>
                </li>
                
            </u>
        </header>
        {children}
    </div>);
}

