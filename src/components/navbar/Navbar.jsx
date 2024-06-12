import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
    return(
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration:0.5}}
                >
                    
                </motion.span>
                <motion.div className="social"
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration:0.5}}
                >
                    <a href="#"><img src="/icons8-linkedin-48.png" alt=""/> </a>
                    <a href="#"><img src="/github-mark.png" alt=""/> </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar