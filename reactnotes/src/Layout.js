import { Outlet, Link } from "react-router-dom";

const linkStyle = {
    margin: "0px",
    textDecoration: "none",
    color: 'Green'

};

const headerStyle = {
    margin: "1px"
}

const Layout = () => {
    return (
        <>
            <nav>
                <div className="header">
                    <Link style={linkStyle} to="/"><h1 style={headerStyle}>Home</h1></Link>
                    <Link style={linkStyle} to="/Notes"><h1 style={headerStyle}>Notes</h1></Link>
                    <Link style={linkStyle} to="/Weather"><h1 style={headerStyle}>Weather</h1></Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
