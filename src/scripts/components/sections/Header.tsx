import React, { useEffect, useState } from 'react';
import Square from '../pieces/Square';

/**
 * The landing page of the website, structured as a basic introduction
 * @returns - The JSX element of the header. 
 */
function Header(props: { phrase: string}) : JSX.Element {
    /*
    const headerTitle: HTMLElement | null = document.getElementById("header-title"); 
    const word = "IAN GAUNT";
    let iteration = 0; 

    useEffect(() => {
        setTimeout(function () {
            if (headerTitle) {
                const sub = word.substring(0, iteration);
                render("header", <Header phrase={sub} />); 
        
                console.log(word.substring(0, 2)); 
                iteration++;
            }
        }, 1000); 
    }) 
    */

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const word = "IAN GAUNT"; 
    const [phrase, setPhrase] = useState(""); 

    useEffect(() => {
        setPhrase(word); 
    });

    return (
        <header className="container">
            <h1 id="header-title">{phrase}</h1>
            <section className="square-container">
                <Square class="sq1"/>
                <Square class="sq2"/>
                <Square class="sq3"/>
            </section>
            <h2 className="copyright">© copyright Ian Gaunt 2023</h2>
        </header>
    );
}

export default Header;