import React from 'react'
import Sidebar from './sidebar'
const Main = (props) => {
    return (
        <div>    
        <main> 
        <section class ="container">  
        <p><strong><center>We are product innovators</center></strong>
Founded by enterprise software veterans in 2012, we're a product development company, transforming founders’ and product owners’ visions into beautiful intuitive mobile and web software products that scale to support millions of users. We bring a fresh perspective to your problems through our agile design and development process that accelerates your time to market and ensures you launch the right product for the right people at the right time.
                </p>         
        </section>
        <Sidebar/>
        </main>
   </div>
    )
}
export default Main;