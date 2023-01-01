import React from 'react';
import { createRoot } from 'react-dom/client';

import '../stylesheets/style.css';

function Header() : JSX.Element {
    const element = (
        <div>
            <h1 id="header-title"><span id="first-name"></span><span id="highlight-name"></span><span id="last-name"></span></h1>
            <h2 id="header-description">full stack <span id="highlight">developer</span> ; graphic designer</h2>
        </div>
    );
    return element;
}

createRoot(document.getElementById('header-root')!).render(
    <Header />
);

var typeDelay = 1000; 
var title = "IAN_GAUNT"; 

for (let i : number = 0; i < title.length; i++) {
    setTimeout(() => {
        var id = "";
        id = (i == 3 ? "highlight-name" : (i > 3 ? "last-name" : "first-name"));

        document.getElementById(id)!.textContent += title.charAt(i);
        console.log(id);
    }, typeDelay);

    typeDelay += 55;
}

setTimeout(() => {
    document.getElementById("header-title")!.style.animation = "1.2s ease-in-out both header-title-shrink";
    document.getElementById("header-description")!.style.animation = "1.2s ease-in-out both header-description-grow";
}, typeDelay + 250);