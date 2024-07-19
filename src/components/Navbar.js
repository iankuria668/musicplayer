import React from "react";
import  "../index.css";
function Navbar(){

    return(
        <div className="navbar-container">

            <div className="profile">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpd2dKUULlTHDgoufs2wFrK7KQlYsPp5WFw&s"
                id="profile-picture"
                alt="profile"
                />
            </div>

            <div>
                <nav>
                    <a href="/"><img src="https://cdn-icons-png.flaticon.com/128/3917/3917032.png" className="icon" alt="Home"/></a>
                </nav>

                <nav>
                    <a href="/discover"><img src="https://cdn-icons-png.flaticon.com/128/5069/5069162.png" className="icon" alt="Discover"/></a>
                </nav>
                <nav>
                    <a href="/search"><img src="https://cdn-icons-png.flaticon.com/128/3917/3917132.png" className="icon" alt="Search"/></a>
                </nav>
            </div> 

            <div>
                <nav>
                    <a href="/library"><img src="https://cdn-icons-png.flaticon.com/128/3917/3917215.png" className="icon" alt="Library"/></a>
                </nav>
            </div> 

        </div>
    )
}

export default Navbar