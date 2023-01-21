// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Stylesheets
import '../stylesheets/style.css';

// Components
function Header() {
    return (
        <div>
            <h1 id="header">IAN GAUNT</h1>
            <div className='square-container'>
                <Square type="square sq1" color="#235789"/>
                <Square type="square sq2" color="#C1292E"/>
                <Square type="square sq3" color="#F1D302"/>
            </div>
        </div>
    );
}

function Square(props : any) : JSX.Element {
    let color : string = props.color; 
    let type : string = props.type; 

    let element = (
        <div className={props.type} style={{
            background: color
        }}></div>
    )

    return element; 
}

// Function for building components and rendering them.
function render(id : string, components : JSX.Element) {
    createRoot(document.getElementById(id)!).render(components);
}

render('header-root', <Header />);