import React from 'react'
const Header = () => {
    return (
        <header>
            <div className="logo">
            <img src="https://www.cognitiveclouds.com/img/h/logo.png" alt="logo"></img>
            </div>
        <div className = "header">
           <a href="https://www.cognitiveclouds.com/">Home</a>
           <a href="https://www.cognitiveclouds.com/custom-software-development-company">About</a>
           <a href="https://www.cognitiveclouds.com/custom-software-development-services">Services</a>
           <a href="https://www.cognitiveclouds.com/software-product-development-portfolio">Portfolio</a>
           <a href ="https://www.cognitiveclouds.com/insights/">Insights</a>
           <a href="https://www.cognitiveclouds.com/contact">Contact</a>
        </div>
    </header>
    )
}
export default Header;