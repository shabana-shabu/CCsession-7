import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './styles.css'
import Sidebar from './sidebar'
const Layout = () => {
    return (
        <div className ="layout">
        <Header />
        <Main />
        <Footer />
    </div>
    )
}
export default Layout;