import CodeLines from "../pieces/CodeLines"

/**
 * A section describing what I am and what I do.
 * 
 * @returns - The JSX element of the "about me" section. 
 */
function About() {
    return (
        <section className="container">
            <div className="box">
                <section className="code-box">
                    <div className="code">
                        <CodeLines />
                    </div>
                </section>
                <section className="description-box">
                    <div className="description">
                        <h1>HEY! \(^_^)/</h1>
                        <h2>
                            • My name is Ian and I built this website. Ever since I 
                            started messing around on my dad's computer with some
                            basic game development programs, I was hooked. I 
                            started off with Lua and Java and have learned a 
                            multitude of languages and libraries over the past
                            six or so years. :)
                            
                            <br /><br />• Web development has come to be one of my favorites, since
                            it's a lot more visual and creative than other mediums. Not
                            to say the other ones aren't my favorites!
                        </h2>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default About;