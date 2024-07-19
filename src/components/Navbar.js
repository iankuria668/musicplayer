import React from "react";

function Navbar(){
    return(
        <div className="navbar">
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