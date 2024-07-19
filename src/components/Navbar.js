import React from "react";
import "./css/navbar.css"

function Navbar(){
    return(
        <div className="navbar-container">
            <nav>
                <a href="/">Home</a>
                <a href="/discover">Discover</a>
                <a href="/search">Search</a>
                <a href="/library">Library</a>
            </nav>
        </div>
    )
}

export default Navbar