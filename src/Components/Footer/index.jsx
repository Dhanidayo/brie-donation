import './style.css';
import GooglePlay from "../../Img-Assets/play-store-icon.jpg";
import AppStore from "../../Img-Assets/app-store-icon.jpg";
import { IconContext } from 'react-icons';
import { CgInstagram } from 'react-icons/cg';
import { FaTiktok } from 'react-icons/fa';
import { CgYoutube } from 'react-icons/cg';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="flex-footer">
                    <div className="footer-list">
                        <h3 className="list-title">BUY <span className="hidden-plus">+</span></h3>
                        <ul>
                            <li><a href="#banner" className='footer-link'>Order Tracking</a></li>
                            <li><a href="#banner" className='footer-link'>Shipping & Returns</a></li>
                            <li><a href="#banner" className='footer-link'>Gift Cards</a></li>
                            <li><a href="#banner" className='footer-link'>Financing</a></li>
                        </ul>
                        <hr className='footer-divider' />
                    </div>
                    <div className="footer-list">
                        <h3 className="list-title">SELL</h3>
                        <ul>
                            <li className='selling-plus'><a href="#banner" className='footer-link'>How Selling Works</a> <span className="hidden-plus">+</span></li>
                            <li><a href="#banner" className='footer-link'>Order Consignment Kit</a></li>
                            <li><a href="#banner" className='footer-link'>Payouts</a></li>
                            <li><a href="#banner" className='footer-link'>Clothing We Accept</a></li>
                        </ul>
                        <hr className='footer-divider' />
                    </div>
                    <div className="footer-list">
                        <h3 className="list-title">HELP <span className="hidden-plus">+</span></h3>
                        <ul>
                            <li><a href="#banner" className='footer-link'>FAQ</a></li>
                            <li><a href="#banner" className='footer-link'>Contact Us</a></li>       
                        </ul>
                        <hr className='footer-divider' />
                    </div>
                    <div className="footer-list">
                        <h3 className="list-title">COMPANY <span className="hidden-plus">+</span></h3>
                        <ul>
                            <li><a href="#banner" className='footer-link'>About Us</a></li>
                            <li><a href="#banner" className='footer-link'>Sustainability</a></li>
                            <li><a href="#banner" className='footer-link'>Press</a></li>
                            <li><a href="#banner" className='footer-link'>Vohnt Editorial</a></li>
                            <li><a href="#banner" className='footer-link'>Careers</a></li>
                        </ul>
                    </div>
                </div>
                <hr className='divider' />

                <div className="social-media">
                    <p>Follow Us</p>
                    <IconContext.Provider value={{ style: {width: ''}}}>
                        <div className="sm-icons">
                            <CgInstagram />
                            <FaTiktok />
                            <CgYoutube />
                            <FiFacebook />
                            <FiTwitter />
                        </div>
                    </IconContext.Provider>
                </div>
                <hr className='divider' />

                <div className="app-download">
                    <p>Download the App</p>
                    <div className="store-icons">
                        <img src={AppStore} alt="" />
                        <img src={GooglePlay} alt="" />
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy;2022 Vohnt. All Rights Reserved.</p>
                    <p><span className='copyright-link'>Privacy Policy</span> | <span className='copyright-link'>Terms of Use</span> | <span className='copyright-link'>Accessibility</span></p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;