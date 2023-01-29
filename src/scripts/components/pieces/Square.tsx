/**
 * An icon for the header designed to contain information about my work.
 * 
 * @param props - The properties of the React element.  
 * @param props.class - The class of the object to decide its color. 
 * @returns - The JSX element of the square. 
 */
function Square(props : {class: string}) : JSX.Element {
    const classes : string = "square " + props.class;
    return (
        <div className={classes}></div>
    )
}

export default Square;