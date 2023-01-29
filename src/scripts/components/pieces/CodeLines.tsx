// The lines to be displayed on the about me section of the website. 
const code : Array<JSX.Element> = [
    <pre><H tx="1"/> <H tx="const" col="b"/> Ian <H tx="= &#123;" col="bt" /></pre>,
    <pre><H tx="2"/>      name<H tx=":"/> <H tx="&#34;Ian Gaunt&#34;" col="g"/><H tx="," /></pre>,
    <pre><H tx="3"/>      age<H tx=":"/> <H tx="16" col="r"/><H tx=", // May birthday!" col="bt"/></pre>,
    <pre><H tx="4"/>      location<H tx=":"/> <H tx="&#34;Ian Gaunt&#34;" col="g"/><H tx=":"/> <H tx=", // Boston native."/></pre>,
    <pre><H tx="5"/>      hobbies<H tx=":"/> </pre>,
    <pre><H tx="6"/>          <H tx="&#34;Programming&#34;" col="g"/><H tx=","/></pre>,
    <pre><H tx="7"/>          <H tx="&#34;Music production&#34;" col="g"/><H tx=", // Ableton user." /></pre>,
    <pre><H tx="8"/>          <H tx="&#34;Collecting trading cards&#34;" col="g"/></pre>,
    <pre><H tx="9"/>      <H tx="]"/></pre>,
    <pre><H tx="10"/> <H tx="&#125;"/></pre>,
]

/**
 * A shorthand highlight function to return a span of a particular color. 
 * 
 * @param props - The properties of the React element.  
 * @param props.tx - The text to be inserted into the <span> element. 
 * @param props.col - The color of the text. Defaults to transparent black.
 * @returns - A <span> JSX element with the proper highlighting. 
 */
function H(props : { tx : string, col? : string}) : JSX.Element {
    // Create a span element containing the new text and the specified color (with bt as default). 
    return ( <span className={props.col || "bt"}>{props.tx}</span> );
}

/**
 * A set of "lines of code" that describe who I am and what I do.
 * 
 * @returns - An array featuring a set of <pre> elements. 
 */
function CodeLines() : JSX.Element {
    return (
        <>
            {code}
        </>
    );
}

export default CodeLines; 