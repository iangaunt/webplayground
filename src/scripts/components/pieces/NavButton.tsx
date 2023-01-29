/**
 * A button to be added to the navigation bar to help navigate the website. 
 * 
 * @param props - The properties of the React element. 
 * @param props.note - The text on the button. 
 * @param props.link - The link to the section of the website to pan to when clicked.
 * @returns - The JSX element of the button. 
 */
function NavButton(props : {note: string, link: string}) : JSX.Element {
    return (
        <a href={props.link} onClick={function() {
            console.log("cool"); 
        }}>
            {props.note}
        </a>
    );
}

export default NavButton;