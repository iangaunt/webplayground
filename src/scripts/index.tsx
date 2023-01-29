// React
import { createRoot } from "react-dom/client";

// Stylesheets
import "../stylesheets/style.css";

// Components
import About from "./components/sections/About";
import Header from "./components/sections/Header";
import NavBar from "./components/sections/NavBar";

import Logos from "./components/pieces/Logos";

// Function for building components from a Map.
function build(roots : Map<string, JSX.Element>) {
    for (const [id, component] of roots) {
        render(id, component); 
    }
}

// Function for rendering a single component.
function render(id: string, component: JSX.Element) {
    const element : HTMLElement | null = document.getElementById(id);
    if (element) {
        createRoot(element).render(component);
    }
}

// Buttons map for navigation bar
const buttons: Map<string, string> = new Map<string, string>([
    ["home", "#header"],
    ["about me", "#about-me"],
    ["programming", "#programming"]
]);

// Roots and their respective components. 
const roots = new Map<string, JSX.Element>([
    ["nav-bar", <NavBar buttons={buttons}/>],
    ["header", <Header phrase="IAN GAUNT" />],
    ["about-me", <About />],
    ["logos-root", <Logos />]
]);

build(roots);