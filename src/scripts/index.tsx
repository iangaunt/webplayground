// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Stylesheets
import '../stylesheets/style.css';

// Components
function Header() : JSX.Element {
    return (
        <div>
            <h1 id="header">IAN GAUNT</h1>
                <br />
            <div className='squareContainer'>
                <Square color="#235789"/>
                <Square color="#C1292E"/>
                <Square color="#F1D302"/>
            </div>
        </div>
    );
}

function Square(props : any) : JSX.Element {
    return (
        <div className="square" style={{background: props.color}}></div>
    )
}

// Function for building components and rendering them.
function render(id : string, components : JSX.Element) {
    createRoot(document.getElementById(id)!).render(components);
}

render('header-root', <Header />);