// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Stylesheets
import '../stylesheets/style.css';

// Components
function Header() {
    return (
        <div style={ { border: '#161925 1px solid', padding: '20px' } }>
            <h1 id="header">IAN GAUNT</h1>
            <div className='square-container'>
                <Square type="square sq1"/>
                <Square type="square sq2"/>
                <Square type="square sq3"/>
            </div>
        </div>
    );
}

function Square(props : any) : JSX.Element {
    let type : string = props.type; 

    let element = (
        <div className={props.type}></div>
    )

    return element; 
}

// Function for building components and rendering them.
function render(id : string, components : JSX.Element) {
    createRoot(document.getElementById(id)!).render(components);
}

render('header-root', <Header />);