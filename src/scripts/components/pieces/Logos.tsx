import Logo from "./Logo";

const logoInformation: Map<string, string> = new Map<string, string>([
    ["vscode-icons:file-type-lua", "https://www.lua.org/"],
    ["logos:java", "https://www.java.org/"],

]);

function Logos() {
    const logos: Array<JSX.Element> = [];

    for (const [file, link] of logoInformation) {
        logos.push(
            <Logo file={file} link={link}/>
        )
    }

    return (
        <>  
            {logos}
        </>
    )
}

export default Logos; 