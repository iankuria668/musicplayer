import React from "react";
import  "../index.css";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
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
                    < a href="/"><AiFillHome /></a>
                </nav>

                <nav>
                    <a href="/discover"><AiOutlineBulb /></a>
                </nav>
                <nav>
                    <a href="/search"><AiOutlineSearch /></a>
                </nav>
            </div> 

            <div>
                <nav>
                    <a href="/library"><AiOutlineMenu /></a>
                </nav>
            </div> 

        </div>
    )
}

export default Navbar