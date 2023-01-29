import NavButton from "../pieces/NavButton";

/**
 * The navigation bar, fixed in the top left of the website.
 * 
 * @param props - The properties of the React element. 
 * @param props.buttons - A Map<string, string> to hold the button name as the key and the button link as the value.
 * @returns - An array which holds all of the NavButton components. 
 */
function NavBar(props : { buttons: Map<string, string> }) {
    const test = []; 
    for (const [note, link] of props.buttons) {
        test.push(
            <NavButton note={note} link={link} />
        );
    }

    return (
        <>
            {test}
        </>
    );
}

export default NavBar;