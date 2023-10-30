import logofooter from "./assets/footerlogo.png";
import facebook from "./assets/facebook.png" ;
import instagram from "./assets/instagram.jpg";
import twitter from "./assets/twitter.png";

const Footer =() =>{
    return(
        <footer>
            <section>
                <div className="company-info" >
                    <img src={logofooter} alt="logofooter" />
                </div>
                <div>
                    <h3> Navigation </h3>
                    <ul>
                    <li> <a href="/"> Home </a> </li>
                     <li> <a href="/about"> About </a> </li>
                    <li> <a href="/services"> Services </a> </li>
                     <li> <a href="/menu"> Menu </a> </li>
                     <li> <a href="/reservations"> Reservations </a> </li>
                     <li> <a href="/order"> Order Online </a> </li>
                     <li> <a href="/login"> Login </a> </li>
                    </ul>
                </div>
                <div>
                <h3> Contact </h3>
                    <ul>
                        <li > Adress : <br/> 2395  Maldove Way Chicago-illinois </li>
                        <li > Phone : <br/> (629)-243-6827 </li>
                        <li > Email : <br/> Info@littlelemon.com </li>
                        
                    </ul>
                </div>
                <div>
                <h3> Social Media links </h3>
                    <ul>
                    <li > <a href="https://www.facebook.com/">  <img src={facebook} alt="facebook" className="facebook"/></a> </li>
                        <li > <a href="https://www.instagram.com/"> <img src={instagram} alt="instagram" className="facebook"/></a>  </li>
                        <li > <a href="https://www.twitter.com/"><img src={twitter} alt="twitter" className="facebook"/> </a> </li>
                        
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;