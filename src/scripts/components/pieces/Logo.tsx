/**
 * A logo for a programming language to link to their documentation.
 * 
 * @param props - The properties of the React element. 
 * @param props.file - The file location of the image. 
 * @param props.link - The website to link to when clicked. 
 * @returns - The JSX element of the logo.
 */

import { Icon } from '@iconify/react';

function Logo(props : { file: string, link: string}): JSX.Element {
    return (
        <a className="logo" href={props.link} rel="noopener noreferrer" target="_blank">
            <Icon className="logo" icon={props.file} width="80%" height="80%" />
        </a>
    )
}

export default Logo; 