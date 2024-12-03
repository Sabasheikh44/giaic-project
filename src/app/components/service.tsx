import "../style/service.css";
import { FaCalculator, FaCode, FaKeyboard, FaLaptop, FaLaptopCode, FaNetworkWired, FaPhone } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";

function Service() {
 return(
    <main className="main">
        <div className="ser-container">
            {/* {top div} */}
            <div className="top-div-ser">
                <h2 className="title-ser">My Services</h2>
                <p className="des-ser"> Expert coding, web development , and iT solutions provided professionally</p>
            </div>
            {/* {bottom div} */}
            <div className="boxes-con">
                <div className="box">
                    <FaLaptopCode className="ser-icon"/>
                    <h3 className="text-ser">Web Development</h3>
                    <span className="span-ser">Blog, E-commerce</span>
                </div>

                <div className="box">
                    <MdKeyboardVoice className="ser-icon"/>
                    <h3 className="text-ser">Sound Designer</h3>
                    <span className="span-ser"> Voice Over, Beat Making</span>
                </div>

                <div className="box">
                    <FaLaptop className="ser-icon"/>
                    <h3 className="text-ser">UI/UX Design</h3>
                    <span className="span-ser"> Creating intutive digital user exp</span>
                </div>

                <div className="box">
                    <FaCode className="ser-icon"/>
                    <h3 className="text-ser">Coding</h3>
                    <span className="span-ser">Code review and Optimization</span>
                </div>

                <div className="box">
                    <FaNetworkWired className="ser-icon"/>
                    <h3 className="text-ser">Front-end developer</h3>
                    <span className="span-ser">HTML/CSS/JAVASCRIPT</span>
                </div>

                <div className="box">
                    <FaKeyboard className="ser-icon"/>
                    <h3 className="text-ser">Web Dasign</h3>
                    <span className="span-ser">Responsive, Web Desingn</span>
                </div>
                
            </div>
        </div>
    </main>
 )
}

export default Service;