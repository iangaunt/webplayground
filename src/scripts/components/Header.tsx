import Square from './Square';

/**
 * The landing page of the website, structured as a basic introduction
 * @returns - The JSX element of the header. 
 */
function Header() : JSX.Element {
    return (
        <div className="container">
            <h1>IAN GAUNT</h1>
            <div className='square-container'>
                <Square class="sq1"/>
                <Square class="sq2"/>
                <Square class="sq3"/>
            </div>
            <h2 className="copyright">© copyright Ian Gaunt 2023</h2>
        </div>
    );
}

export default Header;