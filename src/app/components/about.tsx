import "../style/about.css";
import Image from "next/image";
import "../style/hero.css";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import Link from "next/link";



function About(){
    return(
        <div className="hero-container">
            <div className="hero-boxex-con">
                {/* {left} */}
                <div>
                <Image
                 src={"/images/heroin.png"}
                 width={200}
                 height={200}
                 className="hero-img"
                 alt="Profile"/>
                 <div className="social-icons">
                    
                <Link href={"https://www.youtube.com/@sabaadil5119"}><IoLogoYoutube className="s-icon"/></Link>
                <Link href={"https://www.facebook.com/profile.php?id=100032710713913&mibextid=ZbWKwL"} ><IoLogoFacebook className="a-icon"/></Link>
                <Link href={"https://www.instagram.com/7455_saba?igsh=MWZ5M3F1a3Z6NGZhbQ=="}><IoLogoInstagram className="b-icon"/></Link>
                </div>
                </div>
                {/* {right} */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                    <p className="des-hero"><h3 className="text-about">Hey Everyone</h3>
                         I m Saba.
                         Having recently completed my intermediate studies in commerce, Currently,
                          I m immersed in my next semester, finding coding incredibly engaging and rewarding. 
                        I m excited to continue growing in this field.</p>
                        
                </div>
            </div>

        </div>
    )
}
export default About;