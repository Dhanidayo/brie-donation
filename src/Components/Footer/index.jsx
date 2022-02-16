import './style.css';
import { FontAwesome } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="flex-footer">
                    <div className="footer-list">
                        <h3 className="list-title">BUY <span className="hidden-plus">+</span></h3>
                        <ul>
                            <li><a href="#" className='footer-link'>Order Tracking</a></li>
                            <li><a href="#" className='footer-link'>Shipping & Returns</a></li>
                            <li><a href="#" className='footer-link'>Gift Cards</a></li>
                            <li><a href="#" className='footer-link'>Financing</a></li>
                        </ul>
                        <hr className='footer-divider' />
                    </div>
                    <div className="footer-list">
                        <h3 className="list-title">SELL</h3>
                        <ul>
                            <li className='selling-plus'><a href="#" className='footer-link'>How Selling Works</a> <span className="hidden-plus">+</span></li>
                            <li><a href="#" className='footer-link'>Order Consignment Kit</a></li>
                            <li><a href="#" className='footer-link'>Payouts</a></li>
                            <li><a href="#" className='footer-link'>Clothing We Accept</a></li>
                        </ul>
                        <hr className='footer-divider' />
                    </div>
                    <div className="footer-list">
                        <h3 className="list-title">HELP <span className="hidden-plus">+</span></h3>
                        <ul>
                            <li><a href="#" className='footer-link'>FAQ</a></li>
                            <li><a href="#" className='footer-link'>Contact Us</a></li>       
                        </ul>
                        <hr className='footer-divider' />
                    </div>
                    <div className="footer-list">
                        <h3 className="list-title">COMPANY <span className="hidden-plus">+</span></h3>
                        <ul>
                            <li><a href="#" className='footer-link'>About Us</a></li>
                            <li><a href="#" className='footer-link'>Sustainability</a></li>
                            <li><a href="#" className='footer-link'>Press</a></li>
                            <li><a href="#" className='footer-link'>Vohnt Editorial</a></li>
                            <li><a href="#" className='footer-link'>Careers</a></li>
                        </ul>
                    </div>
                </div>
                <hr className='divider' />

                <div className="social-media">
                    <p>Follow Us</p>
                    <IconContext.Provider value={{ style: {width: ''}}}>
                        <div className="sm-icons">
                            <FaInstagram />
                            <FaTiktok />
                            <FaYoutube />
                            <FaFacebook />
                            <FaTwitter />
                        </div>
                    </IconContext.Provider>
                </div>
                <hr className='divider' />

                <div className="app-download">
                    <p>Download the App</p>
                    <button>App Store</button>
                    <button>Google Play</button>
                </div>

                <div className="copyright">
                    <p>&copy;2022 Vohnt. All Rights Reserved.</p>
                    <p><span>Privacy Policy</span> | <span>Terms of Use</span> | <span>Accessibility</span></p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;