// React
import { createRoot } from 'react-dom/client';

// Stylesheets
import '../stylesheets/style.css';

// Components
import Header from './components/Header';

// Function for building components and rendering them.
function render(id : string, components : JSX.Element) {
    const element : HTMLElement | null = document.getElementById(id);
    if (element) {
        createRoot(element).render(components);
    }
}

render('header-root', <Header />);