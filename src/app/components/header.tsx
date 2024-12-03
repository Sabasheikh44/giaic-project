import Link from "next/link";
import "../style/header.css";

function Header() {
    return (
        <div className="Header">
            {/* {left} */}
            <div>
                <h1 className="logo">Sw.</h1>
            </div>
            {/* {right} */}
            <div className="Header-right-div">
                <ul className="Header-links">
                   <li> 
                       <Link className="nav-links" href={"/"}>Home</Link>
                    </li>

                    <li>
                        <Link  className="nav-links" href={"/about"}>About</Link>
                    </li>

                    <li>
                        <Link  className="nav-links"  href={"/contact"}>Contact</Link>
                    </li>

                
                </ul>
            </div>
            
        </div>
    )
}
export default Header;