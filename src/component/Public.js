import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">iService Repairs Center!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Mumbai City, iService Repairs Center provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    iService Repairs center<br />
                    Mumbai Maharashtra 400001<br />
                    <a href="tel:+15555555555">(+91) 98123 45678</a>
                </address>
                <br />
                <p>Owner: P. R.</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public