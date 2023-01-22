import Square from './Square';

function Header() : JSX.Element {
    return (
        <div style={{ 
            border: '#161925 1px solid', 
            padding: '20px' 
        }}>
            <h1 id="header">IAN GAUNT</h1>
            <div className='square-container'>
                <Square class="square sq1"/>
                <Square class="square sq2"/>
                <Square class="square sq3"/>
            </div>
        </div>
    );
}

export default Header;