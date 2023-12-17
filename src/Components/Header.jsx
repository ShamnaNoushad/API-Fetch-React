import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="p-3" style={{backgroundColor:'rgb(99, 82, 92)'}}>
            <h1 style={{color:'white',fontFamily:'Times New Roman',fontWeight:'bold'}}>API-FETCH POST</h1>
    </Navbar>
        </div>
    )
}

export default Header