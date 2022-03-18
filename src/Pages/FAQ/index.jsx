import { useState } from "react";
import "./style.css";

const FaqPage = () => {
    const [viewInfo, setViewInfo] = useState('');

    const displayExtraInfo = (div) => {
        setViewInfo(div);
    }

    return (
        <div className="faq-page">
            <div className="faq-container">
                <h2 className="heading3 faq-heading">FAQ</h2>
                <div className="faq-content">
                    <h3 className="faq-list-title">
                        SHIPPING AND RETURNS
                    </h3>
                    <ul>
                        <li className="faq-link">
                            Where do you ship? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">How long does shipping take? <span className="faq-hidden-plus">+</span></li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">How much does shipping cost? <span className="faq-hidden-plus">+</span></li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">What's your return policy? <span className="faq-hidden-plus">+</span></li>
                        <hr className="divider faq-divider" />
                    </ul>
                </div>
                <div className="faq-content">
                    <h3 className="faq-list-title">
                        BUYERS
                    </h3>
                    <ul>
                        <li className="faq-link">
                            Why should I shop at Brie? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            What are the restrictions for the shopping cart? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            What is the accepted form of payment? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            Is it possible to use multiple promo codes at checkout? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            Why am I being charged tax on pre-owned items? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            Can I make changes to my order after it has been placed? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            What is Brie's Authentication Guarantee? <span className="faq-hidden-plus" onClick={() => displayExtraInfo("info-container")}>+</span>
                        </li>
                        {viewInfo === "info-container" &&
                            <div className="info-container">
                                <p className="body-text">
                                    Brie's authenticity and quality experts carefully examine each item we list. Should you ever have any concerns about the authenticity of the product you ordered, please get in touch with us hi@brie.co. We have a zero-tolerance policy towards replicas. If the item turns out to be unauthentic, we will issue a full refund.
                                </p>
                            </div>
                        }
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            What happens if my items arrived damaged or not as described? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                    </ul>
                </div>
                <div className="faq-content">
                    <h3 className="faq-list-title">
                        DONATION PARTNERS
                    </h3>
                    <ul>
                        <li className="faq-link">
                            How do I order a Partner Donation Kit? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            What can I send to Brie? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            What are your quality standards? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            Can I send outdated or poor-quality clothing? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            What are the shipping instructions for the Partner Donation Kit? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            How much do charities get paid? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            Can you return my donations? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            What happens to my items that you don't list? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            How long does it take to list the Partner Donation Kit? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            Why should I choose Brie instead of a donation bin? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                    </ul>
                </div>
                <div className="faq-content">
                    <h3 className="faq-list-title">
                        MEDIA & INFLUENCERS
                    </h3>
                    <ul>
                        <li className="faq-link">
                            Do you have an ambassador program? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                        <li className="faq-link">
                            Who do I contact about press or media inquiries? <span className="faq-hidden-plus">+</span>
                        </li>
                        <hr className="divider faq-divider" />
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default FaqPage;